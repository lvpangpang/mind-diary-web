import { message } from "antd";
import { View } from "antd-mobx-components";
import { http } from "js-common-library";
import List from "./List";
import store from "./store";
import Search from "./Search";
import API_OrderCenter from "@/pages/order-center/manage/order-list/apis";

function Index() {
  // 普通导出
  const handleExport = async () => {
    store.setLoading(true);
    message.info("正在导出,请稍等");
    try {
      await http.exporter(API_OrderCenter.export, store.getParams());
    } finally {
      store.setLoading(false);
    }
  };

  // 100万数据导出
  const handleLargeExport = () => {
    http.get(API_OrderCenter.largeExport, store.getParams()).then((res) => {
      message.info(res.msg);
    });
  };

  return (
    <View>
      <Search
        handleExport={handleExport}
        handleLargeExport={handleLargeExport}
        handleExportResult={() => {
          setShowExport(true);
        }}
      />
      <List />
    </View>
  );
}

export default Index;
