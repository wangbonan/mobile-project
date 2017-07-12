<template>
      <div class="header">
        <div class="header-fix">
          <div class="header-icon">
            <router-link to="/allgoods"><div class="all-goods"></div></router-link>
          </div>
          <div class="header-nav">
            <ul>
              <li class="bottom-bar">
                <router-link to="/index">首页</router-link>
                <router-view></router-view>
              </li>
              <li>
                <router-link to="/index">新品</router-link>
                <router-view></router-view>
              </li>
              <li><a href="#">家务</a></li>
              <li><a href="#">下厨</a></li>
              <li><a href="#">家居服</a></li>
              <li><a href="#">家居服</a></li>
            </ul>
          </div>
        </div>
          <div class="item-baner">
            <mt-swipe :auto="3000">
              <mt-swipe-item>
                <router-link to="/goods-logo1">
                  <img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="/goods-logo1">
                <img src="./e234e5b64ab1456c9345dc8a4d604fb2_d1242x0.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="/goods-logo1">
                <img src="./924590309cb749fabf810a832a402984_d1242x0.jpg" alt="">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img src="./b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg" border="0" usemap="#sale" alt="3d" />
              <map name="sale" id="sale">
              <area shape="rect" coords="0,0,122,80" href="http://localhost:8082/#/sale" alt="sale" target="_self">
              <area shape="rect" coords="250,0,372,80" href="http://localhost:8082/#/sale" alt="sale" target="_self">
              </map>
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 150px;" src="./9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 925px;" src="./c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 238px;" src="./7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 310px;" src="./3cea975b99f9458198e9ed706af9b391_d1242x0.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 100px;" src="./fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 689px;" src="./3da3d66f3c934a1285dd686cb28a1c90_d1242x0.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="combo-title"></div>
            <div class="img-wrap">
              <img style="height: 689px;" src="./27eey4le8sbcjfa25cfoyi49xv66u4kb.png">
            </div>
          </div>
      </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
    export default {
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height: 96px
    width:100%;
    position: relative
    z-index 999
    .header-fix
      position: fixed;
      top:0
      right:0
      left:0
      z-index 999
      .header-icon
        height: 48px
        width: 100%
        background-image url("./z8kxhm97vb8c9jk0b2kv2r27c74dfmg2.png")
        background-size 50%
        background-color: #89BE48
        background-position center
        background-repeat no-repeat
        .all-goods
          height: 48px
          width: 44px
          background-image url("./xttpvg4l7ld4phm7cw3l9rfds7vi42j1.png")
          background-repeat no-repeat
          background-size 50%
          background-position center
          position: absolute
          right  0
      .header-nav
        width: 800px
        height: 48px
        ul
          li
            width: 80px
            float: left
            height 4rem
            box-sizing border-box
            text-align center
          .bottom-bar
            background-color #80B532
        a
          font-size 1.35rem
          display: block
          line-height: 3.8rem
          height: 3.8rem
          background-color #fff

    .item-baner
      padding-top: 96px
      height: 250px
      width:100%;
      .mint-swipe-item
        img
          width:100%;

      /*overflow hidden*/
      /*ul
        height:100%
        width: 3375px
        li
          float left
          height:100%
          a
            img
              width: 375px
              height:100%*/
    .item-combo
      margin-bottom 1rem
      .img-wrap
        img
          height:90px
          width:100%

</style>

