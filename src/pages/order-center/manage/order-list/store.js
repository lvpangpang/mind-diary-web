import { TableStore } from "antd-mobx-components";
import { http } from "js-common-library";
import API_OrderCenter from "@/pages/order-center/manage/order-list/apis";
import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  $table = new TableStore({
    fetchList: async ({ pageSize, pageNum }) => {
      const data = await http.get(API_OrderCenter.list, {
        params: { pageSize, pageNum, ...this.getParams() },
      });
      return data;
    },
  });
  getParams = () => {
    const { publishOrderTime, orderPayTime, ...rest } = this.$table.getParams();
    const [publishOrderTimeOn, publishOrderTimeOff] = (
      publishOrderTime || []
    ).map((item) => item.unix() + "000");
    const [orderPayTimeOn, orderPayTimeOff] = (orderPayTime || []).map(
      (item) => item.unix() + "000"
    );
    return {
      ...(publishOrderTimeOn
        ? { publishOrderTimeOn, publishOrderTimeOff }
        : {}),
      ...(orderPayTimeOn ? { orderPayTimeOn, orderPayTimeOff } : {}),
      ...rest,
    };
  };

  loading = false;
  setLoading = (flag) => {
    this.loading = flag;
  };
}

export default new Store();
