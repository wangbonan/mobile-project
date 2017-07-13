<template>
  <div class="app">
    <router-view></router-view>
    <div class="tab">
        <div class="tab-item">
          <router-link to="/home/index">
            <div class="icon-home icon1"></div>
            <span>首页</span>
          </router-link>
        </div>

        <div class="tab-item">
          <router-link to="/allgoods">
            <div class="icon-lis icon2"></div>
            <span>全部产品</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/hangout">
            <div class="icon-hang"></div>
            <span>闲逛</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shopcart">
            <div class="shop"></div>
            <span>购物车</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/usercontre">
            <div class="user"></div>
            <span>用户中心</span>
          </router-link>
        </div>
      </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    .tab
      position fixed
      bottom:0;
      left: 0
      right 0
      height: 55px;
      line-height: 55px
      z-index 999
      display: flex
      background-color #F8F8F8
      .tab-item
        flex 1
        font-size 16px
        color: #000
        text-align center
        .icon-home, .user, .shop, .icon-hang, .icon-lis
          width: 75px
          height: 3.3rem
          background-size 28%
          background-position 50%
          background-repeat no-repeat
        .icon-home
          background-image url(./components/home/27eey4le8sbcjfa25cfoyi49xv66u4kb.png)
        .user
          background-image url(./components/home/hz52laruwzyaq3bwqqo0ga2gov8f4tmz.png)
        .shop
          background-image url(./components/home/chzjh6f5u3b64j8edwibb51c8ourdtb3.png)
        .icon-hang
          background-image url(./components/home/psm7tidk7hhp9h4g7dupgwhw3ohzzc5p.png)
        .icon-lis
          background-image url(./components/home/h3gp05ivmehqpqcyxf8cf3apic3evnpp.png)
        span
          display: block
          height: 15px;
          width: 75px
          font-size 1.1rem
          margin-top -25px
      .active
        color green

</style>


