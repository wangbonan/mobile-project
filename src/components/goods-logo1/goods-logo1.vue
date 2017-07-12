<template>
    <div>
      <div class="goods-logo-wrap">
        <div class="goods-logo-content">
          <span class="btn-back" onclick="history.back()">
            <label class="leftback-img"></label>
          </span>
          <p class="header-title">商品介绍</p>
        </div>
        <div class="bander">
          <mt-swipe :auto="3000">
            <mt-swipe-item>
                <img src="http://i.lifevccdn.com/upload/AppItemHeaders/d8d0c0e2f42f404bbf9fda4437e42221_d1242x0.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="http://i.lifevccdn.com/upload/AppItemHeaders/37ebf002a327434ea9f863504606aaea_d1242x0.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="http://i.lifevccdn.com/upload/AppItemHeaders/77c32c910b34496bb7bc3921beff90b1_d1242x0.jpg" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="dsc-content">
          <div class="dsc-title">耐高温玻璃饭盒</div>
          <p class="dsc">午餐自己带,更健康</p>
          <div class="price-cnt">
            <em class="icon-larger">¥</em>
            <em class="price-larger">19</em>
            <span class="normal-wrap">
              <em class="icon-smaller">¥</em>
              <em class="price-smaller">29</em>
              <span class="line"></span>
            </span>
          </div>
          <div class="sale-wrap">
            <span class="sale-skill">限时体验价</span>
            <span class="sale-skill-new">新</span>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods-logo-wrap
    min-width: 320px;
    max-width: 768px;
    padding:0
    width:100%;
    position: fixed;
    top:0
    z-index:10;
    margin:auto
    .goods-logo-content
      position: relative
      height: 48px;
      margin: 0 auto
      .btn-back
        position: absolute;
        left: 3px
        top: 3px
        width:10%;
        height: 3.8rem;
        z-index:100;
        .leftback-img
          background: url("../img/hqjiywffe6gb6h6lk2eb8rtgh3csq449.png")
          width 1rem
          height: 2.6rem;
          display block
          float: left
          position: absolute;
          top: .6rem
      .header-title
        position: absolute
        height: 48px;
        width:100%;
        right: 0
        font-size: 2rem
        text-align center
        line-height: 48px;
        color #fff
        background #89be48
        z-index:1;
    .bander
      height: 375px
      width: 375px;
      .mint-swipe-item
        img
          height: 100%;
          width: 100%;
    .dsc-content
      text-align center
      width:100%;
      padding 10px 0 10px
      .dsc-title
        padding-top: 15px;
        text-align: center;
        font-size: 2rem;
        color: #000;
        height: 1.4rem;
        line-height: .4rem;
      .dsc
        height: 1rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        color: #999;
      .price-cnt
        line-height: 20px;
        text-align center
        height: 20px;
        padding-top: 15px
        .icon-larger
          color red
          font-size 1.6rem
          font-style normal
        .price-larger
          color red
          font-size: 2rem;
          font-style normal
        .normal-wrap
          position: relative
          padding-left 5px
          .icon-smaller
            font-style normal
            font-size 1.6rem
          .price-smaller
            font-style normal
            font-size 1.8rem
          .line
            border-top 1px solid #000
            display: block
            position: absolute
            width: 40px;
            height: 1px;
            top: 4px
            left: 3px

      .sale-wrap
        padding-top: 6px
        text-align center
        .sale-skill
          padding: 2px
          margin-right: 3px
          color: #000
          background: rgb(254, 209, 9)
        .sale-skill-new
          padding: 2px
          color: rgb(253, 238, 238);
          background: rgb(205, 6, 15);

</style>

