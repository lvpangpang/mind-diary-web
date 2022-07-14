import { removeStorage } from "js-common-library";
import { useAppInfo } from "antd-mobx-components";

export function getBaseType(type) {
  const { baseTypes } = useAppInfo();
  return baseTypes[type] || [];
}

export function isAuth(permissionName) {
  const { userInfo } = useAppInfo();
  const { permissions = [] } = userInfo;
  for (var i = 0; i < permissions.length; i++) {
    if (permissions[i]["permissionName"] === permissionName) {
      return true;
    }
  }
  return false;
}

export function logout() {
  removeStorage("token");
  window.location.reload();
}
