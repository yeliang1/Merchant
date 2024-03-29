// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

//路由拦截器
router.beforeEach(({meta, path}, from, next) => {
  let {auth = true} = meta;

  let $user = JSON.parse(sessionStorage.getItem('$user')) || {};
  let isLogin = Boolean($user.auth);

  if (!auth && !isLogin && path != '/login') {
    return next({path: '/login'});
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
