import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index/index.vue'
import allgoods from '../components/allgoods/allgoods.vue'
import hangout from '../components/hangout/hangout.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import usercontre from '../components/usercontre/usercontre.vue'
import shopIdCart from '../components/shopIdCart/shopIdCart.vue'
import points from '../components/points/points.vue'
import newG from '../components/new/new.vue'

Vue.use(VueRouter)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/allgoods',
      component: allgoods
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
      path: '/index',
      component: index,
      children:[
        {
          path: 'new',
          component: newG
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
