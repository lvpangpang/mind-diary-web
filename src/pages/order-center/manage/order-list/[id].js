import { Card, Form } from "antd"
import { View, Image, Upload, Button } from "antd-mobx-components"
import Api from "./Api"

const { PreviewGroup } = Image
const { Item } = Form

function Index() {
  const [form] = Form.useForm()

  const submit = async () => {
    const res = await form.validateFields()
    console.log(res)
  }

  return (
    <View current={["详情"]}>
      <Card title="Image 测试demo" style={{ marginBottom: 30 }}>
        <PreviewGroup>
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            width={200}
          ></Image>
          <Image
            src="http://static.runoob.com/images/demo/demo2.jpg"
            width={200}
          ></Image>
        </PreviewGroup>
      </Card>

      <Card title="Upload 测试demo">
        <Form form={form}>
          <Item
            name="uploadImg"
            label="备注图片"
            extra={"图片最多可添加2张，大小不得大于4M，支持jpg、png、jpeg格式"}
            rules={[
              {
                required: true,
                message: "请上传图片",
              },
            ]}
            initialValue={[
              {
                name: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
              },
            ]}
          >
            <Upload
              getOSSConfig={Api.getConfig}
              maxCount={2}
              maxSize={4 * 1024 * 1024}
              dirname="driver"
              accept="image/jpg, image/png, image/jpeg"
            />
          </Item>
        </Form>
        <Button type="primary" onClick={submit}>
          提交处理
        </Button>
      </Card>
    </View>
  )
}

export default Index
