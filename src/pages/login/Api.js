import { http } from 'js-common-library'

export default {
  sendCode: (data) => http.post('/dss/v1/verify-code', data),
  login: (data) => http.post('/dss/v1/login', data),
}
