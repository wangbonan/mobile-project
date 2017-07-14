<template>
  <div class="header-scroll" id="header-scroll" >
    <div class="item-baner">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/e234e5b64ab1456c9345dc8a4d604fb2_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/924590309cb749fabf810a832a402984_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/e234e5b64ab1456c9345dc8a4d604fb2_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/924590309cb749fabf810a832a402984_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/goods-logo1">
            <img src="../home/09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg" alt="">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img src="../home/b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg" border="0" usemap="#sale" alt="3d" />
        <map name="sale" id="sale">
          <router-link to="/sale">
            <area shape="rect" coords="0,0,122,80">
          </router-link>
          <area shape="rect" coords="250,0,372,80" href="http://localhost:8082/#/sale" alt="sale" target="_self">
        </map>
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 150px;" src="../home/9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg">
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 925px;" src="../home/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg">
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 238px;" src="../home/7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg">
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 310px;" src="../home/3cea975b99f9458198e9ed706af9b391_d1242x0.jpg">
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 100px;" src="../home/fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg">
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 689px;" src="../home/3da3d66f3c934a1285dd686cb28a1c90_d1242x0.jpg">
      </div>
    </div>
    <div class="item-combo">
      <div class="combo-title"></div>
      <div class="img-wrap">
        <img style="height: 689px;" src="../home/27eey4le8sbcjfa25cfoyi49xv66u4kb.png">
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-scroll
    .item-baner
      height: 250px
      width:100%;
      .mint-swipe-item
        img
          width:100%;
    .item-combo
      margin-bottom 1rem
      .img-wrap
        img
          height:90px
          width:100%
</style>

