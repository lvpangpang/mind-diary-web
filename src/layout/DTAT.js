const data = {
  id: 130,
  username: "吕肥肥",
  roleNameDisplays: ["超级管理员"],
  phone: "182571",
  userType: 1,
  userTypeShow: "用户",
  menus: [
    {
      id: 132,
      title: "订单中心",
      path: "/#",
      children: [
        {
          id: 133,
          title: "订单管理",
          path: "/#",
          children: [
            {
              id: 134,
              title: "订单列表",
              path: "/order-center/manage/order-list",
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: 135,
      title: "运力中心",
      path: "/#",
      children: [
        {
          id: 136,
          title: "车辆管理",
          path: "/#",
          children: [
            {
              id: 137,
              title: "车辆列表",
              path: "/capacity/car-manage/cars",
              children: null,
            },
            {
              id: 138,
              title: "车型列表",
              path: "/capacity/car-manage/type",
              children: null,
            },
          ],
        },
        {
          id: 139,
          title: "司机管理",
          path: "/#",
          children: [
            {
              id: 140,
              title: "司机列表",
              path: "/capacity/driver-manage/drivers",
              children: null,
            },
            {
              id: 141,
              title: "审核入驻",
              path: "/capacity/driver-manage/enter",
              children: null,
            },
          ],
        },
        {
          id: 144,
          title: "渠道管理",
          path: "/#",
          children: [
            {
              id: 145,
              title: "运力公司",
              path: "/capacity/channel/company",
              children: null,
            },
          ],
        },
      ],
    },
  ],
};


export default data