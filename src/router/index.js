import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import index from '../components/index/index.vue'
import allgoods from '../components/allgoods/allgoods.vue'
import hangout from '../components/hangout/hangout.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import usercontre from '../components/usercontre/usercontre.vue'
import shopIdCart from '../components/shopIdCart/shopIdCart.vue'
import points from '../components/points/points.vue'
import news from '../components/news/news.vue'
import login from '../components/login/login.vue'
import regisiter from '../components/regisiter/regisiter.vue'
import goodsLogo1 from '../components/goods-logo1/goods-logo1.vue'
import sale from '../components/sale/sale.vue'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.use(VueRouter)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home/index'

    },
    {
      path: '/allgoods',
      component: allgoods
    },
    {
      path: '/goods-logo1',
      component: goodsLogo1
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/sale',
      component: sale
    },
    {
      path: '/regisiter',
      component: regisiter
    },
    {
      path: '/hangout',
      component: hangout
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/usercontre',
      component: usercontre
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'index',
          component: index
        },
        {
          path: 'news',
          component: news
        }
      ]
    },
    {
      path: 'shopIdCart',
      component: shopIdCart
    },
    {
      path: 'points',
      component: points
    }
  ]
})
