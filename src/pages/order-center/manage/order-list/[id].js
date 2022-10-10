import { useRef, useState } from "react"
import { Card } from "antd"
import { View, Image, Upload, Button } from "antd-mobx-components"
import Api from "./Api"

const { PreviewGroup } = Image

function Index() {
  const ref = useRef()

  const [value, setValue] = useState([
    {
      name: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ])
  const onChange = (fileList) => {
    setValue(fileList)
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
        <Upload
          ref={ref}
          value={value}
          onChange={onChange}
          dirname="driver"
          accept="image/png, image/jpeg"
          getOSSConfig={Api.getConfig}
          maxCount={1}
          imgLimit={{
            maxWidth: 1000,
          }}
        ></Upload>
        <br />
        <Button
          type="primary"
          onClick={() => {
            console.log(value)
          }}
        >
          获取上传文件对象
        </Button>
      </Card>
    </View>
  )
}

export default Index
