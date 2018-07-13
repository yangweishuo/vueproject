// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {Alert,Toast} from 'wc-messagebox'
import   vuelazyload   from'vue-lazyload'
import '../static/fonts/iconfont.css'
import '../static/js/flexible.debug'
import '../static/css/bootstrap/css/bootstrap.min.css'
import 'wc-messagebox/style.css'
import '../static/css/m_style.css'
import FastClick from 'fastclick'

FastClick.attach(document.body);
Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Alert)
Vue.use(Toast)
Vue.use(vuelazyload,{
  preload:15,
  error:'dist/error.png',
  loading:'../static/img/Ripple-2.7s-200px.gif',
  attempt:10
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
