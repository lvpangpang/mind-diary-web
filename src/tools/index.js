import { removeStorage } from "js-common-library"
import { useAppInfo } from "antd-mobx-components"

// 获取下拉数据源
export function getBaseType(type) {
  const { baseTypes } = useAppInfo()
  return baseTypes[type] || []
}

// 权限判断
export function isAuth(permissionName) {
  const { userInfo } = useAppInfo()
  const { permissions = [] } = userInfo
  for (var i = 0; i < permissions.length; i++) {
    if (permissions[i]["permissionName"] === permissionName) {
      return true
    }
  }
  return false
}

// 退出登录
export function loginOut() {
  removeStorage("token")
  window.location.reload()
}
