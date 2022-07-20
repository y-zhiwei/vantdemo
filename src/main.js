import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/util/tool"
import "@/util/element_ui"
import 'amfe-flexible'
import './assets/font/iconfont.css'
// import './assets/font/iconfont'

import "@/util/install"
import 'vant/lib/index.css'

import { Toast } from 'vant'
Vue.prototype.$toast = Toast

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
