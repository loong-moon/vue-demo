// 用import加载vue
// 已经在webpack.base.conf通过别名设置了 仅运行时或独立运行
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import global from './config/global'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/sass/_app.scss'

Vue.use(iView)
Vue.use(global)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
