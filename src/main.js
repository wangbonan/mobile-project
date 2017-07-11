import Vue from 'vue'
import App from './App'
import router from './router/index'
import Mint from 'mint-ui'
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
