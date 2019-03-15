import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/cart/Cart'
import home from '@/views/home'
import Login from '@/views/login'
import notFond from '@/views/error/404'
import sliderPath from './sliderPath'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        name: '登录'
      },
      component: Login
    },
    {
      path: '/',
      name: 'home',
      meta: {
        name: '首页',
        auth: false
      },
      component: home,
      children: sliderPath
    },
    {
      path: '/hello',
      name: 'hello',
      meta: {
        auth: true
      },
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        auth: true
      },
      component: Cart
    },
    {
      path: '/404',
      name: '404',
      meta: {
        name: '404'
      },
      component: notFond
    },
    {
      path: '*',
      redirect: '/404',
    }
  ]
})
