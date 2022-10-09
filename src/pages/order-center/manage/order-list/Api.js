import { http } from "js-common-library"

export default {
  list: (params) =>
    http.get(`/order-backstage/v1/es/backstage/orders`, {
      params,
    }),
  export: (obj) => http.get(`/order-backstage/v1/es/orders/export`, obj),
}
