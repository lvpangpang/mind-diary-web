module.exports = {
  title: "平台管理系统",
  icon: "https://www.lvpangpang.com/index.ico",
  useFileRouter: true,
  port: 3008,
  bmsLib: true,
  publicPath: "/mind-diary-web/",
  externals: {
    antd: {
      name: "antd",
      url: "https://unpkg.com/antd@4.23.5/dist/antd.min.js",
    },
  },
}
