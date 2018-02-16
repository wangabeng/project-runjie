// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import $ from 'jquery'
// 对ES6的语法 如promise做转意
import 'babel-polyfill'
// 解决移动端300MS点击延迟的问题
import fastClick from 'fastclick'
fastClick.attach(document.body)
import store from './store/index.js'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('common/img/loading.png'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  data: {
    eventBus: new Vue()
  },
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    $route(){
      // console.log('gaibian');
    }
  }
})
