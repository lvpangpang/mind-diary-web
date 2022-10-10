import { Input, Form, Button } from "antd"
import { setStorage } from "js-common-library"
import styles from "./style.less"
import Api from "./Api"

const { Item } = Form

const { env } = __ENV__

function Index() {
  const [form] = Form.useForm()

  const login = () => {
    form.validateFields().then(async (values) => {
      const { token } = await Api.login(values)
      setStorage("token", token)
      const url = env === "local" ? "/" : "/test-web"
      window.location.href = url
    })
  }

  return (
    <div className={styles.index}>
      <Form form={form} className={styles.login_wrap}>
        <div className={styles.title}>平台管理系统</div>
        <div className={styles.form}>
          <Item
            name="phone"
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
            ]}
          >
            <Input size="large" placeholder="账号" />
          </Item>

          <Item
            name="verifyCode"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
            ]}
          >
            <Input size="large" placeholder="验证码" />
          </Item>

          <Button type="primary" size="large" block onClick={login}>
            登录
          </Button>
        </div>
      </Form>
      <footer className={styles.footer}>
        ©2022 Created by lvfeifei, All Rights Reserved.
      </footer>
    </div>
  )
}
export default Index
