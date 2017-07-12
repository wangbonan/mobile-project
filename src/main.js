import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueScroller from 'vue-scroller'
import 'mint-ui/lib/style.css'
/* eslint-disable no-new */
Vue.use(VueScroller)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
