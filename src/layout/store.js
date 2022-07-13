import { setAppInfo } from '@sd/admin'
import { Modal } from 'antd'
import { logout } from '@/tools'
import Api from './Api'

class Store {
  initApp = async () => {
    const [info, types] = await Api.init()
    const { id, menus, permissions, ...rest } = info || {}
    if (!menus || menus.length === 0) {
      Modal.warning({
        title: '提示',
        content: '当前账号没有任何权限，请联系管理员添加权限',
        onOk: logout,
      })
      return Promise.reject('没有权限')
    }
    setAppInfo({
      id,
      menus,
      baseTypes: types,
      authorities: permissions.map(({ permissionName }) => permissionName),
      ...rest,
    })
    
  }
}
export default new Store()
