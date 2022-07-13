import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BackTop, Layout, Modal } from 'antd'
import { App, AppLayout } from 'antd-mobx-components'
import { getStorage } from 'js-common-library'
import Api from './Api'
import DATA from './DTAT'

function Index({ children }) {
  const [data, setData] = useState({})
  const [baseTypes, setBaseType] = useState([])

  // if (pathname.indexOf('/login') === 0) {
  //   return children
  // }

  useEffect(() => {
    // const [info, types] = await Api.init()
    // const { id, menus, permissions } = info || {}
    // if (!menus || menus.length === 0) {
    //   Modal.warning({
    //     title: '提示',
    //     content: '当前账号没有任何权限，请联系管理员添加权限',
    //     onOk: logout,
    //   })
    //   return Promise.reject('没有权限')
    // }
    setData(DATA)
    // setBaseType(types)
  }, [])

  return (
    <App
      id={data.id}
      isLogin={() => !getStorage()}
      provider={{ selectTypes: baseTypes }}
    >
      <BackTop />
      <AppLayout logo="平台管理系统" menuConfig={data.menus}>
        <Layout>{children}</Layout>
      </AppLayout>
    </App>
  )
}
export default Index
