import { Table } from 'antd-mobx-components'
import { Link } from 'react-router-dom'
import store from './store'
import { isAuth } from '@/tools'

const Columns = [
  {
    title: '订单编号',
    dataIndex: 'orderNo',
    fixed: 'left',
    width: 100,
  },
  {
    title: '城市',
    dataIndex: 'cityName',
    width: 100,
  },
  {
    title: '业务类型',
    dataIndex: 'businessTypeShow',
    width: 100,
  },
  {
    title: '订单类型',
    dataIndex: 'orderTypeShow',
    width: 100,
  },
  {
    title: '计费类型',
    dataIndex: 'priceTypeShow',
    width: 100,
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatusShow',
    width: 100,
  },
  {
    title: '品牌',
    dataIndex: 'brandName',
    width: 100,
  },
  {
    title: '司机姓名',
    dataIndex: 'driverName',
    width: 100,
  },
  {
    title: '手机号',
    dataIndex: 'driverPhone',
    width: 100,
  },
  {
    title: '车牌号',
    dataIndex: 'carNo',
    width: 88,
  },
  {
    title: '业务模块',
    dataIndex: 'providerName',
    width: 100,
  },
  {
    title: '渠道订单号',
    dataIndex: 'providerOrderNo',
    width: 100,
  },
  {
    title: '行程录音',
    dataIndex: 'tapeFlag',
    width: 100,
  },
  {
    title: '下单时间',
    dataIndex: 'publishOrderTime',
    width: 90,
  },
  {
    title: '支付时间',
    dataIndex: 'orderPayTime',
    width: 90,
  },
  {
    title: '取消类型',
    dataIndex: 'cancelReasonShow',
    width: 100,
  },
  {
    title: '订单起点',
    dataIndex: 'startAddr',
    width: 100,
  },
  {
    title: '订单终点',
    dataIndex: 'endAddr',
    width: 100,
  },

  {
    title: '操作',
    dataIndex: '#operator',
    fixed: 'right',
    width: 80,
    render: (text, record) => {
      return (
        isAuth('orderDetail') && (
          <Link to={`/order-center/manage/order-list/${record.orderNo}`}>详情</Link>
        )
      )
    },
  },
]

function List() {
  return <Table rowKey="orderNo" scroll={{ x: 1400 }} columns={Columns} store={store} />
}

export default List
