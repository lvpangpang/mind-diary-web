const API_OrderCenter = {
  list: `/order-backstage/v1/es/backstage/orders`, //订单列表
  detail: `/order-backstage/v1/es/backstage/orders/`, //订单详情
  handleRecord: (orderNo: any) => `/owlc/v1/work_order/handleRecord/${orderNo}`, //订单操作记录(来自工单处理)
  export: `/order-backstage/v1/es/orders/export`, //2w数据导出
  largeExport: '/order-backstage/v1/es/orders/large_export', //大数据导出
  exportLog: '/order-backstage/v1/export_log/page', //导出记录
  reassignRecord: '/order-backstage/v1/es/orders/reassignRecord', //改派记录
  invoiceRecord: '/owlc/v1/invoice/page', //开发票记录 notapi
  orderDeductRule: '/order-backstage/v1/es/orders/deductRule/', //订单当时使用的抽成规则
  workOrderList: `/owlc/v1/work_order/page`, //工单列表
  createWorkOrder: `/owlc/v1/work_order/create`, //创建工单

  workDetail: `/owlc/v1/work_order/detail/`, //工单详情
  workBases: `/owlc/v1/work_order/base`, //工单基本数据
  workQuestions: `/owlc/v1/work_order/questions`, //工单分类
  updateTitle: `/owlc/v1/work_order/updateTitle`, //工单分类修改
  disposeSync: `/owlc/v1/work_order/disposeSync`, //工单处置同步

  handleRefund: `/owlc/v1/work_order/handle/refund`, //退款
  changePrice: `/owlc/v1/work_order/handle/changePrice`, //改价
  freeOrder: `/owlc/v1/work_order/handle/free`, //免单
  closeOrder: `/owlc/v1/work_order/handle/close`, //关单
  workUpdate: `/owlc/v1/work_order/update`, //工单更新
  
  orderByphone: `/owlc/v1/work_order/orderList/phone`, //乘客手机号查询
  driversList: `/capacity-backstage/v1/driver/page`,
}
export default API_OrderCenter
