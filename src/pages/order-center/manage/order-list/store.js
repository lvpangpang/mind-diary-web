import { TableStore } from "antd-mobx-components"
import Api from "./Api"
import { makeAutoObservable } from "mobx"

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  $table = new TableStore({
    fetchList: async ({ pageSize, pageNum }) => {
      const data = await Api.list({ pageSize, pageNum, ...this.getParams() })
      return data
    },
  })
  getParams = () => {
    const { publishOrderTime, orderPayTime, ...rest } = this.$table.getParams()
    const [publishOrderTimeOn, publishOrderTimeOff] = (
      publishOrderTime || []
    ).map((item) => item.unix() + "000")
    const [orderPayTimeOn, orderPayTimeOff] = (orderPayTime || []).map(
      (item) => item.unix() + "000"
    )
    return {
      ...(publishOrderTimeOn
        ? { publishOrderTimeOn, publishOrderTimeOff }
        : {}),
      ...(orderPayTimeOn ? { orderPayTimeOn, orderPayTimeOff } : {}),
      ...rest,
    }
  }
}

export default new Store()
