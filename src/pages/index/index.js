import { Button } from "antd";
import "./index.less";
import { getBaseType, isAuth } from '@/tools'

function Index() {
  console.log(isAuth('orderList'))
  return (
    <div>
      欢迎来到吕肥肥的系统
    </div>
  );
}

export default Index;
