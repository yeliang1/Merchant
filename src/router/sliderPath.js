import abstract from '@/views/common/abstract'
import User from '@/views/settings/user'
import goodsList from '@/views/goods/goods-list'
import orderList from '@/views/orders/order-list'


export default [
  {
    path: '/setting',
    name: 'setting',
    meta: {
      name: '基本设置',
      auth: false,
      icon: 'el-icon-menu'
    },
    component: abstract,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          name: '个人中心',
          auth: false,
          icon: ''
        },
        component: User
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      name: '商品管理',
      auth: false,
      icon: 'el-icon-location'
    },
    component: abstract,
    children: [
      {
        path: 'list',
        name: 'goodlist',
        meta: {
          name: '商品列表',
          auth: false,
          icon: ''
        },
        component: goodsList
      }
    ]
  },
  {
    path: '/orders',
    name: 'orders',
    meta: {
      name: '订单管理',
      auth: false,
      icon: 'el-icon-document'
    },
    component: abstract,
    children: [
      {
        path: 'list',
        name: 'orderlist',
        meta: {
          name: '订单列表',
          auth: false,
          icon: ''
        },
        component: orderList
      }
    ]
  }
]
