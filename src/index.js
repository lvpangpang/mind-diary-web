import { BrowserRouter } from "react-router-dom";
// import { ConfigProvider, message } from "antd";
// import zhCN from "antd/lib/locale-provider/zh_CN";
import { http } from "js-common-library";
import "./index.less";

const { env } = __ENV__;
http.setConfig({
  baseUrl:
    env === "local"
      ? "http://127.0.0.1:3000"
      : "https://www.lvpangpang.com/api",
});

function Index({ children }) {
  return (
    <BrowserRouter>
      <>{children}</>
    </BrowserRouter>
  );
}

export default Index;
