import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { BackTop } from "antd"
import { App, AppLayout } from "antd-mobx-components"
import { getStorage } from "js-common-library"
import Api from "./Api"
import User from "./User"
const { env } = __ENV__

function Index({ children }) {
  const [userInfo, setUserInfo] = useState({})
  const [baseTypes, setBaseType] = useState([])
  const { pathname } = useLocation()

  if (pathname.indexOf("/login") === 0) {
    return children
  }

  useEffect(async () => {
    const userInfo = await Api.getUserInfo()
    const dataTypes = await Api.getDataTypes()
    setUserInfo(userInfo)
    setBaseType(dataTypes)
  }, [])

  return (
    <App
      id={userInfo.id}
      isLogin={() => getStorage("token")}
      provider={{ baseTypes, userInfo }}
      loginUrl={env === "local" ? "/login" : "/mind-diary-web/login"}
    >
      <AppLayout
        logo="平台管理系统"
        menuConfig={userInfo.menus}
        extra={<User data={userInfo}></User>}
      >
        {children}
      </AppLayout>
      <BackTop></BackTop>
    </App>
  )
}
export default Index
