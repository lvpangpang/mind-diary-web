import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, message } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { configure } from "mobx";
import { http, getStorage } from "js-common-library";
import "./index.less";
import { logout } from "@/tools";

configure({
  enforceActions: "never",
});
const { env } = __ENV__;
http.setConfig({
  baseURL:
    env === "local"
      ? "https://qa01web-gateway.lingxichuxing.com"
      : "https://qa01web-gateway.lingxichuxing.com",
  headers: {
    contextId: "dss",
    "skio-token": getStorage("token"),
    
  },
  transformResult(res) {
    const { code, data, msg } = res.data || {};
    if (code === 200) {
      return data;
    }
    message.error(msg);
    if (code === 5001) {
      logout();
    }
    return Promise.reject(msg);
  },
  error(e) {
    if (e.response?.status === 401) {
      message.error(e.response.data?.msg || "用户权限变更需重新获取权限");
      return logout();
    }
    message.error(e.message || "请求异常");
  },
});

function Index({ children }) {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </BrowserRouter>
  );
}

export default Index;
