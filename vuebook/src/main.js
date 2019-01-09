// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
// 全局使用swiper组件
Vue.use(VueAwesomeSwiper, /* { default global options } */);
/* eslint-disable no-new */
Vue.use(router);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
