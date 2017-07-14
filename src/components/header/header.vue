<template>
      <div class="index-header">
        <div class="header-fix">
          <div class="header-icon">
            <router-link to="/allgoods"><div class="all-goods"></div></router-link>
          </div>
          <div class="header-nav" ref="headerNav">
            <ul>
              <li class="bottom-bar">
                <router-link to="/home/index">首页</router-link>
              </li>
              <li>
                <router-link to="/home/news">新品</router-link>
              </li>
              <li>
                <router-link to="/home/housework">家务</router-link>
              </li>
              <li>
                <router-link to="/home/cook">下厨</router-link>
              </li>
              <li>
                <router-link to="index/news">家居服</router-link>
              </li>
              <li>
                <router-link to="index/news">生活</router-link>
              </li>
              <li>
                <router-link to="index/news">软装</router-link>
              </li>
              <li>
                <router-link to="index/news">床品</router-link>
              </li>
              <li>
                <router-link to="index/news">工作和旅行</router-link>
              </li>
              <li>
                <router-link to="index/news">了解LifeVC</router-link>
              </li>
            </ul><!-- 横向滚动 -->
          </div>
        </div>
      </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vue from 'vue'
    export default {
      created() {
        Vue.nextTick(()=>{
          let scroll = new BScroll(this.$refs.headerNav, {
            scrollX: true,
            click: true,
            probeType: 3,
            scrollY: false
          })
        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index-header
    height: 96px
    width:100%;
    position: relative
    z-index 102
    .header-fix
      position: fixed;
      top:0
      right:0
      left:0
      z-index 999
      .header-icon
        height: 48px
        width: 100%
        background-image url("../home/z8kxhm97vb8c9jk0b2kv2r27c74dfmg2.png")
        background-size 50%
        background-color: #89BE48
        background-position center
        background-repeat no-repeat
        .all-goods
          height: 48px
          width: 44px
          background-image url("../home/xttpvg4l7ld4phm7cw3l9rfds7vi42j1.png")
          background-repeat no-repeat
          background-size 50%
          background-position center
          position: absolute
          right  0
      .header-nav
        height: 48px
        ul
          width: 800px;
          height: 48px;
          li
            width: 80px
            float: left
            height 4rem
            box-sizing border-box
            text-align center
          .bottom-bar
          a
            font-size 1.35rem
            display: block
            line-height: 3.8rem
            height: 3.8rem
          .active
            color: #80B532
            border-bottom 2px solid #80B532
</style>

