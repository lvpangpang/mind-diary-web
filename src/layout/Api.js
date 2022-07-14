import { http } from 'js-common-library'

const getDataTypes = () => http('/saas/v1/basic/dataTypes')
const getUserInfo = () => http('/saas/v1/user/current_user_permission')

export default {
  getDataTypes,
  getUserInfo,
}
