<template>
    <div class="goods-wrapper">
      <div class="goods-logo-wrap">
        <div class="goods-logo-fix">
          <div class="goods-logo-content">
          <span class="btn-back" onclick="history.back()">
            <label class="leftback-img"></label>
          </span>
            <p class="header-title">商品介绍</p>
          </div>
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
        <div class="discount">
          <div class="sale-wrap">
            <span class="sale-skill-new">优惠</span>
            <span class="sale-skill">登录查看你的积分和优惠券</span>
          </div>
        </div>
        <div class="dsc-style">
          <div class="dsc-standard">
            <span class="dsc-span">规格 :</span>
            <div class="dsc-s-1 select">
              <span>分隔式</span>
              <i></i>
            </div>
            <div class="dsc-s-2">
              <span>带筷勺</span>
            </div>
          </div>
          <div class="dsc-color">
            <span class="dsc-span">颜色 :</span>
            <div class="dsc-c-1 select">
              <img src="http://i.lifevccdn.com/upload/AppItemExhibit/bd5de658a6594d9c8a38dc5d6f3a6fe3.jpg" alt="">
              <i></i>
            </div>
            <div class="dsc-c-2">
              <img src="http://i.lifevccdn.com/upload/AppItemExhibit/dc0e0efa1d2141a6b079a69ac08b7565.jpg" alt="">
            </div>
          </div>

        </div>
        <div class="count">
          <div class="count-wrap">
            <span class="count-num">数量 : </span>
            <button class="minus">
             <!-- <img src="../img/270vnpcsae4s0sjud0sv8yd2u2bbdye5.png">-->
              <span></span>
            </button>
            <span class="ipt-num">1</span>
            <button class="add">
              <!--<img src="../img/ndqn91sjamunepmb9dghup063l9eppvp.png">-->
              <span>
                <i></i>
              </span>
            </button>
          </div>
        </div>
        <div class="post-wrap">
          <div class="post">
            <span>送至 : </span>
            <div class="address">
              上海(满¥99免运费)
              <p></p>
              <span>新会员首单,满69元免运费</span>
            </div>
          </div>
        </div>
        <div class="icon-wrap">
          <div class="activity"></div>
          <div class="promise"></div>
        </div>
      </div>
      <div class="footer-fix">
        <div class="footer-goods-wrap">
          <div class="server">
            <div class="icon-server"></div>
            <span>客服</span>
          </div>
          <router-link to="/index">
            <div class="to-index">
              <div class="icon-index"></div>
              <span>首页</span>
            </div>
          </router-link>
          <router-link to="/shopcart">
            <div class="to-shopcart">
              <div class="icon-car"></div>
              <span class="shop-number">0</span>
            </div>
          </router-link>
          <button class="add-to-shopcart">加入购物车</button>
        </div>
      </div>
      <div class="mask"></div>
      <div class="buy-good">
        <div class="goods-top-wrap">
          <img src="../img/bd5de658a6594d9c8a38dc5d6f3a6fe3_d1242x0.jpg" class="icon-big" />
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
          <div class="dsc-style">
            <div class="dsc-standard">
              <span class="dsc-span">规格 :</span>
              <div class="dsc-s-1 select">
                <span>分隔式</span>
                <i></i>
              </div>
              <div class="dsc-s-2">
                <span>带筷勺</span>
                <i></i>
              </div>
            </div>
            <div class="dsc-color">
              <span class="dsc-span">颜色 :</span>
              <div class="dsc-c-1 select">
                <img src="http://i.lifevccdn.com/upload/AppItemExhibit/bd5de658a6594d9c8a38dc5d6f3a6fe3.jpg" alt="">
                <i></i>
              </div>
              <div class="dsc-c-2">
                <img src="http://i.lifevccdn.com/upload/AppItemExhibit/dc0e0efa1d2141a6b079a69ac08b7565.jpg" alt="">
                <i></i>
              </div>
            </div>
          </div>
          <p class="line-1px"></p>
          <div class="add-ok">
            <button class="add-ok-btn">确定</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-wrapper
  position: relative
  z-index 1000
  .goods-logo-wrap
    background-color: #fff
    .goods-logo-fix
      width:100%;
      position: fixed;
      top:0
      z-index:10;
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
      padding-top 48px
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
    .discount
      border-top: 1px solid #ddd
      border-bottom: 1px solid #ddd
      margin-left: -8px
      padding: 12px
      .sale-wrap
        text-align left
        .sale-skill-new
          padding: 2px
          color: rgb(253, 238, 238);
          background: rgb(205, 6, 15);
        .sale-skill
          padding: 2px
          margin-right: 3px
          color: red

    .dsc-style
      margin-left 5px
      .dsc-standard
        .dsc-span
          display: block
          font-size 14px
          padding: 10px 0 8px
          color #666
        .dsc-s-1, .select
          position: relative
          display: inline-block
          text-align: center;
          line-height: 40px;
          border: 1px solid #83B842
          color #83B842
          width: 60px;
          height: 40px;
          margin-left 5px
          i
            height: 0;
            border-style: solid;
            border-width: 15px 15px 0;
            border-color: transparent #83b842 #83b842 transparent;
            font-size: 0;
            line-height: 0;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 9;
            &:after
              content: "";
              width: 8px;
              height: 4px;
              display: block;
              border-bottom: 1px solid #fff;
              border-left: 1px solid #fff;
              position: absolute;
              left: 6px;
              top: -8px;
              transform: rotate(-45deg);
        .dsc-s-2
          display: inline-block
          text-align: center;
          line-height: 40px;
          border: 1px solid #ddd
          color #000
          width: 60px;
          height: 40px;
          margin-left 5px
      .dsc-color
        .dsc-span
          color #666
          display: block
          font-size 14px
          padding: 10px 0 8px
        .dsc-c-1, .select
          display: inline-block
          position: relative
          text-align: center;
          line-height: 40px;
          border: 1px solid #83B842
          color #83B842
          width: 48px;
          height: 48px;
          margin-left 5px
          img
            width:100%;
            height:100%;
          i
            height: 0;
            border-style: solid;
            border-width: 15px 15px 0;
            border-color: transparent #83b842 #83b842 transparent;
            font-size: 0;
            line-height: 0;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 9;
            &:after
              content: "";
              width: 8px;
              height: 4px;
              display: block;
              border-bottom: 1px solid #fff;
              border-left: 1px solid #fff;
              position: absolute;
              left: 6px;
              top: -8px;
              transform: rotate(-45deg);
        .dsc-c-2
          display: inline-block
          text-align: center;
          line-height: 40px;
          border: 1px solid #ddd
          color #000
          width: 48px;
          height: 48px;
          margin-left 5px
          img
            width:100%;
            height:100%;
    .count
      margin-left 5px
      .count-wrap
        font-size 0
        padding-top: 10px
        .count-num
          font-size: 14px
          color #666
        .minus
          margin-left 5px
          outline: none
          border: 1px solid #ddd;
          width: 28px
          height: 28px
          background-color #eee
          position: relative;
          top: 8px
          span
            display: block
            width: 13px;
            border-bottom: 2px solid rgba(90, 90, 90, 0.8)
        .add
          outline: none
          border: 1px solid #ddd;
          width: 28px
          height: 28px
          top: 8px
          background-color #eee
          position: relative
          span
            position: relative;
            display: block
            width: 14px;
            border-bottom: 2px solid rgba(90, 90, 90, 0.8)
            i
              position: absolute
              left: 6px
              top: -5px
              width: 13px;
              height: 13px;
              border-left:2px solid rgba(90, 90, 90, 0.8)
        .ipt-num
          position: relative;
          top: 2px;
          display: inline-block
          line-height: 24px;
          font-size 16px
          height: 24px;
          width: 36px;
          text-align center
          border-top 2px solid #ddd
          border-bottom 2px solid #ddd


    .post-wrap
      margin-left 5px
      .post
        padding-top:25px
        position: relative
        span
          float: left
          display inline-block
          line-height: 30px;
          font-size 14px
          color #666
        .address
          padding-top: 8px
          font-size 14px
          margin-left 5px
          display: inline-block
          p
            height: 1px;
            padding-top 2px
          span
            color red




    .icon-wrap
      margin-bottom 37px
      .activity
        margin-top 10px
        background url("../img/8790d2e3fe9b4440afaeff14ca3a2a45.jpg") no-repeat
        height: 100px;
        background-size 100%
      .promise
        margin-top: 10px
        background url("../img/c67db6265fb94762998bf0eb82376249_d1242x0.jpg") no-repeat
        height: 190px;
        background-size 100%
  .footer-fix
    position: fixed;
    left: 0;
    bottom: -60px;
    right: 0;
    z-index:1000;
    .footer-goods-wrap
      background-color #f8f8f8
      height: 100px;
      position: relative
      .server
        display: inline-block
        text-align center
        .icon-server
          margin-left 26px
          background url("../img/6aa5hk4lvkkvm871kpo3zc9jfaeh9ig2.png") no-repeat
          background-size 50%
          width:47.85px;
          height:25px;
        span
          color: #7e8c8d
      .to-index
        display: inline-block
        .icon-index
          background url("../img/dduz2ni55nbdzzs0rrz6xz3lmavzfab2.png") no-repeat
          background-size 50%
          width:47.85px;
          height:25px;
      .to-shopcart
        position: absolute
        top: 1px
        display: inline-block
        border: 1px solid #009D42
        border-radius 7px
        width: 77px;
        height: 35px;
        text-align center
        .icon-car
          position: absolute
          top: 7px
          left: 10px
          display: inline-block
          padding-left: 10px
          background url("../img/q0vau1rlgtgjwywb0pnad9tnjmi4hbve.png") no-repeat
          background-size 50%
          width: 40px;
          height: 40px;
        span
          text-align center
          width:auto;
          min-width:20px;
          min-height: 20px;
          height:auto;
          border-radius 50%
          background-color red
          display inline-block
          position: absolute
          right: 12px;
          top: 8px;
          font-size 1.5rem
          color: #fff


      .add-to-shopcart
        float: right
        border-radius 8px
        display inline-block
        background-color: #009D42;
        width: 150px;
        height: 40px;
        color: #fff
        margin-right 9px
        outline:none
        border:none

  .mask
    display: none
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: .5;
    z-index: 1001;
  .buy-good
    display: none
    position: fixed;
    left: 0;
    bottom: -20px;
    right: 0;
    z-index:1002;
    background: #fff
    .goods-top-wrap
      .icon-big
        position: absolute;
        left: 7px;
        top: 15px
        bottom: 165px;
        display: block;
        width: 87px;
        height: 87px;
        border: 1px solid #89be48;
        margin: .14rem;
        float: left;
        box-sizing: border-box;
      .dsc-content
        border-bottom 1px solid #ddd
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
      .dsc-style
        margin-left 5px
        .dsc-standard
          .dsc-span
            display: block
            font-size 14px
            padding: 10px 0 8px
            color #666
          .dsc-s-1, .select
            display: inline-block
            position: relative
            text-align: center;
            line-height: 40px;
            border: 1px solid #83B842
            color #83B842
            width: 60px;
            height: 40px;
            margin-left 5px
            i
              height: 0;
              border-style: solid;
              border-width: 15px 15px 0;
              border-color: transparent #83b842 #83b842 transparent;
              font-size: 0;
              line-height: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              z-index: 9;
              &:after
                content: "";
                width: 8px;
                height: 4px;
                display: block;
                border-bottom: 1px solid #fff;
                border-left: 1px solid #fff;
                position: absolute;
                left: 6px;
                top: -8px;
                transform: rotate(-45deg);
          .dsc-s-2
            display: inline-block
            text-align: center;
            line-height: 40px;
            border: 1px solid #ddd
            color #000
            width: 60px;
            height: 40px;
            margin-left 5px
        .dsc-color
          .dsc-span
            color #666
            display: block
            font-size 14px
            padding: 10px 0 8px
          .dsc-c-1, .select
            display: inline-block
            text-align: center;
            line-height: 40px;
            border: 1px solid #83B842
            color #83B842
            width: 48px;
            height: 48px;
            margin-left 5px
            img
              width:100%;
              height:100%;

          .dsc-c-2
            position: relative
            display: inline-block
            text-align: center;
            line-height: 40px;
            border: 1px solid #ddd
            color #000
            width: 48px;
            height: 48px;
            margin-left 5px
            img
              width:100%;
              height:100%;
            i
              height: 0;
              border-style: solid;
              border-width: 15px 15px 0;
              border-color: transparent #83b842 #83b842 transparent;
              font-size: 0;
              line-height: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              z-index: 9;
              &:after
                content: "";
                width: 8px;
                height: 4px;
                display: block;
                border-bottom: 1px solid #fff;
                border-left: 1px solid #fff;
                position: absolute;
                left: 6px;
                top: -8px;
                transform: rotate(-45deg);


      .add-ok
        background-color #e7e7e7
        .add-ok-btn
          display: block
          margin: 21px auto
          border:1px solid #89be48
          border-radius 7px
          width: 160px
          height: 40px
          text-align center
          background-color: #89be48
          outline: none
          color #fff
          line-height:40px;
          font-size: 1.8rem;
          letter-spacing: 2px;

</style>

