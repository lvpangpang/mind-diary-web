import { Button, Input, DatePicker } from "antd";
import { observer } from "mobx-react-lite";
import { Select, SearchBar } from "antd-mobx-components";
import { getBaseType, isAuth } from "@/tools";
import store from "./store";

const { Item } = SearchBar;
const { Option } = Select;

function SearchForm(props) {
  const ORDER_STATUS = getBaseType("orderStatus");
  const ORDER_CANCEL_REASONS = getBaseType("orderCancelReason");
  const ORDER_TYPES = getBaseType("orderType");
  const BUSINESS_TYPES = getBaseType("businessType");
  const ORDER_PROVIDERS = getBaseType("provider");
  const BRAND = getBaseType("brand");
  return (
    <SearchBar
      itemCol={{ span: 8 }}
      store={store}
      initialValues={{
        gainOrderSuccess: "1"
      }}
      extra={[
        isAuth("ordersExport") && (
          <Button
            key="1"
            onClick={props.handleExport}
            type="primary"
            loading={store.loading}
          >
            导出
          </Button>
        ),

        isAuth("ordersLargeExport") && (
          <Button key="2" onClick={props.handleLargeExport} type="primary">
            大数据导出
          </Button>
        ),

        isAuth("ordersLargeExportPage") && (
          <Button key="3" onClick={props.handleExportResult}>
            查询导出结果
          </Button>
        ),
      ]}
    >
      <Item label="订单编号" name="orderNo">
        <Input />
      </Item>
      <Item label="订单状态" name="orderStatusList">
        <Select showAll options={ORDER_STATUS} mode="multiple" />
      </Item>
      <Item label="取消类型" name="cancelTypeList">
        <Select showAll options={ORDER_CANCEL_REASONS} mode="multiple" />
      </Item>
      <Item label="司机姓名" name="driverName">
        <Input />
      </Item>
      <Item label="下单时间" name="publishOrderTime" autoPlaceholder={false}>
        <DatePicker.RangePicker format="YYYY-MM-DD HH:mm:ss" showTime />
      </Item>
      <Item label="支付时间" name="orderPayTime" autoPlaceholder={false}>
        <DatePicker.RangePicker format="YYYY-MM-DD HH:mm:ss" showTime />
      </Item>
      <Item label="城市" name="cityCode">
        <Select type="city" />
      </Item>
      <Item label="仅抢单成功" name="gainOrderSuccess">
        <Select>
          <Option key="1" value="1">
            是
          </Option>
          <Option key="0" value="0">
            否
          </Option>
        </Select>
      </Item>
      <Item label="品牌" name="brandNoList">
        <Select mode="multiple" options={BRAND} />
      </Item>
      <Item label="行程录音" name="tapeFlag">
        <Select>
          <Option value="">全部</Option>
          <Option value="1">有</Option>
          <Option value="0">无</Option>
        </Select>
      </Item>
      <Item label="业务类型" name="businessType">
        <Select showAll options={BUSINESS_TYPES} />
      </Item>
      <Item label="流量方订单号" name="providerOrderNo">
        <Input />
      </Item>
      <Item label="车牌号" name="carNo">
        <Input />
      </Item>
      <Item label="司机手机号" name="driverPhone">
        <Input />
      </Item>
      <Item label="司机编号" name="driverNo">
        <Input />
      </Item>
      <Item label="订单起点" name="startAddr">
        <Input />
      </Item>
      <Item label="订单终点" name="endAddr">
        <Input />
      </Item>
      <Item label="订单类型" name="orderType">
        <Select showAll options={ORDER_TYPES} />
      </Item>
      <Item label="业务模块" name="providerNo">
        <Select showAll options={ORDER_PROVIDERS} />
      </Item>
      <Item label="有无改价" name="altered">
        <Select>
          <Option key="" value="">
            全部
          </Option>
          <Option key="1" value="1">
            是
          </Option>
          <Option key="0" value="0">
            否
          </Option>
        </Select>
      </Item>
      <Item label="有无退款" name="refunded">
        <Select>
          <Option key="" value="">
            全部
          </Option>
          <Option key="1" value="1">
            是
          </Option>
          <Option key="0" value="0">
            否
          </Option>
        </Select>
      </Item>
      <Item label="计费类型" name="priceType">
        <Select>
          <Option key="" value="">
            全部
          </Option>
          <Option key="1" value="1">
            一口价
          </Option>
          <Option key="0" value="0">
            实时计价
          </Option>
        </Select>
      </Item>
      <Item label="是否改派" name="relationType">
        <Select>
          <Option key="" value="">
            全部
          </Option>
          <Option key="1" value="1">
            改派
          </Option>
          <Option key="0" value="0">
            非改派
          </Option>
        </Select>
      </Item>
    </SearchBar>
  );
}
export default observer(SearchForm);
