import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './user.js';
import cart from './cart.js';
import products from './products.js';

export default  new Vuex.Store({
  modules: {
    user,
    cart,
    products
  },
  strict: process.env.NODE_ENV !== 'production'
})
