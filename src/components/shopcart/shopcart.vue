<template>
    <div>
      <div class="shop-cart">
        <div class="shop-cart-content">
          <router-link to="/home">
            <span class="btn-back">
            <label class="leftback-img"></label>
          </span>
            <p class="header-title">购物车</p>
          </router-link>
        </div>
        <div class="header-login-wrap">
          <div class="header-login">
            <router-link to="/login" class="btn-login">登录</router-link>
            <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
          </div>
        </div>
        <div class="header-exchange-wrap">
          <div class="header-exchange">
            <input type="text" class="exch-ipt" placeholder="礼品兑换处，请输入兑换码">
            <input type="button" class="exch-btn" value="兑换">
          </div>
        </div>
      </div>
      <div class="wrap-content">
        <div class="cart-panel">
          <ul>
            <li class="check-all">
              <span class="selectwrap">
                <span class="slct"></span>
                <span class="slct-txt">全选</span>
              </span>
            </li>
            <li class="btn-com disabled">
              <span class="cart-btn-txt1">去结算
            <span>(0)</span>
              </span>
            </li>
            <li class="btn-com del disabled">
              <span class="cart-btn-txt2">删除</span>
            </li>
            <li class="cart-count">
              <p>合计:
                <em class="stress">￥0</em>
              </p>
              <p class="misc">商品 ￥0 - 优惠 ￥0</p>
            </li>
          </ul>
        </div>
        <div class="wrap-nodata">
          <div class="carts-img">
            <img src="../img/bxfkfrk8iim54kik3sqwfpm4ay33o1yf.png">
          </div>
          <div class="carts-text">
            <p>您的购物车还是空荡荡的</p>
          </div>
          <div class="carts-link">
            <router-link to="/index">赶紧去逛逛</router-link>
          </div>
        </div>
        <div class="add-goods-wrap">
          <div class="goods-list-wrap">
            <div class="goods-list">
              <div class="tick" style="display: inline-block;">
                <div class="select-wrap select"></div>
              </div>

              <div class="good-icon" style="display: inline-block;">
                <img src="http://i.lifevccdn.com/upload/AppItemExhibit/89556cdd38bb47fa9af68dbbeff97845.jpg">
              </div>
              <div class="dsc" style="display: inline-block;">
                <div class="p1">
                  <router-link class="good-name" to="">耐高温玻璃饭盒</router-link>
                  <span class="item-price">¥ 15</span>
                </div>
                <div class="p2">
                  <span class="special">分隔式,绿色</span>
                </div>
                <div class="hot-and-count">
                  <span class="hot">限时体验价</span>
                  <span class="good-count">× 1</span>
                </div>
              </div>
            </div>
          </div>
          <div class="post-to-wrap">
            <div class="address-wrap">
              <span class="post-to">送至 : </span>
              <span class="address">上海</span>
            </div>
            <div class="content-wrap">
              <div class="d1">上海 ¥99包邮</div>
              <div class="tip">你还差
              <span class="price-spread">¥ 65</span>
                即可享受<span>免运费</span>
            </div>
            </div>
          </div>
        </div>
        <div class="wrap-cart-assem">
          <div class="cart-assem-title">
            <p>Rico.S为你精心推荐</p>
          </div>
          <div class="cart-assem-list">
            <ul>
              <li>
                <div class="cart-assem-item">
                  <a href="javascript:void(0);">
                    <img src="../img/D1610291615001555_d230x230.jpg">
                  </a>
                  <p class="title">自粘式缝隙贴(2卷装)</p>
                  <p class="price">￥19</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="javascript:void(0);">
                    <img src="../img/D1610291615001555_d230x230.jpg">
                  </a>
                  <p class="title">自粘式缝隙贴(2卷装)</p>
                  <p class="price">￥19</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="javascript:void(0);">
                    <img src="../img/D1610291615001555_d230x230.jpg">
                  </a>
                  <p class="title">自粘式缝隙贴(2卷装)</p>
                  <p class="price">￥19</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="javascript:void(0);">
                    <img src="../img/D1610291615001555_d230x230.jpg">
                  </a>
                  <p class="title">自粘式缝隙贴(2卷装)</p>
                  <p class="price">￥19</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="javascript:void(0);">
                    <img src="../img/D1610291615001555_d230x230.jpg">
                  </a>
                  <p class="title">自粘式缝隙贴(2卷装)</p>
                  <p class="price">￥19</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="javascript:void(0);">
                    <img src="../img/D1610291615001555_d230x230.jpg">
                  </a>
                  <p class="title">自粘式缝隙贴(2卷装)</p>
                  <p class="price">￥19</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop-cart
    min-width: 320px;
    max-width: 768px;
    padding:0
    width:100%;
    background #89be48
    position: fixed;
    top:0
    z-index:10;
    margin:auto
    .shop-cart-content
      position: relative
      height: 48px;
      margin: 0 auto
      .btn-back
        position: absolute;
        left: 10px
        top: 4px
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
        z-index:1;
        height: 48px;
        width:100%;
        font-size: 2rem
        text-align center
        line-height: 48px;
        color #fff
    .header-login-wrap
      width: 100%;
      height: 3rem;
      background-color: #f0fae6;
      margin: 0;
      padding: .8rem 0 .5rem;
      .header-login
        width: 74%;
        min-height: 2.8rem;
        display: table;
        overflow: hidden;
        margin: 0 auto;
        padding: 0 0 0 21%;
        position: relative;
        .btn-login
          width: 18%;
          height: 2.6rem;
          display: block;
          background: #fff;
          border: 1px solid #8bc146;
          text-align: center;
          font-size: 1.5rem;
          color: #88c13e;
          line-height: 2.5rem;
          margin: 0;
          position: absolute;
          left: 0;
          top: 0;
        .login-tip
          width: 100%;
          display: table-cell;
          text-align: left;
          vertical-align: middle;
          font-size: 1.4rem;
          color: #333;
          line-height: 1.5rem;
    .header-exchange-wrap
      width: 100%;
      height: 3.2rem;
      background-color: #fff;
      margin: 0;
      padding: .6rem 0 .5rem;
      border-bottom: 1px solid #f2f2f2;
      .header-exchange
        position: relative
        width: 93%;
        height: 3rem;
        overflow: hidden;
        margin: .1rem auto 0;
        padding: 0;
        .exch-ipt
          padding-left: 10px;
          width: 80%;
          height: 2.8rem;
          line-height: 2.8rem;
          display: inline-block;
          border-radius: 0;
          border: 1px solid #e7e7e7;
          background: #fff;
          text-align: left;
          font-size: 1.4rem;
        .exch-btn
          width: 20%;
          height: 3rem;
          line-height: 3rem;
          display: inline-block;
          border-radius: 0;
          background: #fff;
          text-align: center;
          font-size: 1.6rem;
          color: #6fbd00;
          letter-spacing: .1rem;
          text-indent: .2rem;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 3;
          border: 1px solid #6fbd00;
  .wrap-content
    margin-top: 152.17px
    .wrap-nodata
      display: none
      color: #2e2e2e;
      background-color: #F2F2F2;
      .carts-img
        margin: 0 auto;
        text-align: center;
        padding-left: 2rem;
        padding-top: 10px;
        box-sizing: border-box;
        img
          vertical-align: middle;
          max-width: 160px;
      .carts-text
        text-align: center;
        font-size: 1.8rem;
        color: rgb(102, 102, 102);
        line-height: 3rem;
        p
          line-height: 1.5em;
      .carts-link
        text-align: center;
        a
          border: 1px solid rgb(137, 190, 72);
          padding: 0.5rem 1.5rem;
          display: inline-block;
          border-radius: 6px;
          font-size: 1.5rem;
          letter-spacing: 1px;
          margin-top: 6px;
          color: rgb(137, 190, 72);
    .wrap-cart-assem
      position: fixed;
      bottom: 4rem;
      width: 100%;
      min-width: 320px;
      max-width: 640px;
      overflow: hidden;
      background-color: #fff;
      border-bottom: 1px solid #f2f2f2;
      margin: 1rem auto 0;
      .cart-assem-title
        width: 94%;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        text-align: left;
        font-size: 1.6rem;
        color: #333;
        line-height: 2rem;
        margin: 0 auto;
        padding: .8rem 3%;
        P
          line-height: 1.5em;
      .cart-assem-list
        width: 100%;
        max-height: 12rem;
        overflow-y: hidden;
        overflow-x: scroll;
        margin: 0 auto;
        padding: 1.3rem 0;
        ul
          width:1000px;
          li
            margin: 0 5px;
            width: 8rem;
            float: left
            overflow: hidden;
            display: inline-block;
            vertical-align: top;
            text-align: left;
            .cart-assem-item
              a
                text-decoration none
                color: #333
                img
                  width: 96px;
                  height: 96px;
                  overflow: hidden;
                  display: block;
              p
                width: 100%;
                overflow: hidden;
                display: block;
                text-align: left;
                font-size: 1rem;
                color: #333;
                line-height: 2rem;
                font-weight: 400;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: keep-all;
    .cart-panel
      display: none
      width: 100%;
      height: 4rem;
      background: #fff;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #f6f6f6;
      color: gray;
      position: fixed;
      left: 0;
      bottom: 4.5rem;
      z-index: 999;
      .check-all
        margin: 13px 0 0 12px;
        .selectwrap
          display: inline-block;
          float: left;
          overflow: hidden;
          line-height: 20px;
          cursor: pointer;
          .slct
            width: 19px;
            height: 19px;
            background-color: #fff;
            border: 1px solid #9b9b9b;
            border-radius: 50%;
            position: relative;
            display: inline-block;
            float: left;
          .slct::after
            content: "";
            width: 11px;
            height: 5px;
            display: block;
            border-bottom: 2px solid #fafafa;
            border-left: 2px solid #fafafa;
            font-size: 0;
            line-height: 0;
            position: absolute;
            left: 3px;
            top: 4px;
            transform: rotate(-45deg);
          .slct-txt
            text-align: left
            font-size: 1.35rem
            color: #4a4a4a
            padding-left .6rem
      .btn-com .disabled
        width: 30%;
        height: 100%;
        float: right;
        border: 0;
        border-bottom: 1px solid #8ec351;
        border-top: 1px solid #8ec351;
        border-radius: 0;
        text-align: center;
        font-size: 1.7rem;
        color: #fff;
        line-height: 4rem;
        letter-spacing: 2px;
        text-indent: 2px;
        position: absolute;
        right: 0;
        top: -1px;
      .cart-btn-txt1
        width: 100px;
        color: #c2c2c2;
        text-align: center;
        background-color: #666666;
        opacity: 1;
        height: 100%;
        font-size: 1.7rem;
        display: inline-block;
        line-height: 4rem;
        position: absolute;
        top: 0px;
        right: 0px;
        span
          font-size: 1.4rem
          letter-spacing 0
      .btn-com
        .cart-btn-txt2
          display: none
          width: 100px;
          color: #c2c2c2;
          text-align: center;
          background-color: #666666;
          opacity: 1;
          height: 100%;
          font-size: 1.7rem;
          line-height: 4rem;
          position: absolute;
          top: 0px;
          right: 0px;
      .cart-count
        width: 45%;
        height: 4rem;
        overflow: hidden;
        float: right;
        text-align: right;
        font-size: 1.55rem;
        color: #4a4a4a;
        line-height: 2rem;
        margin: 0;
        padding-right: 32%;
        p
          text-align: right;
          color: #4a4a4a
          height: 25.5px;
          width: 169px;
          line-height: 1.5em;
          padding: .2rem 0 .1rem
          font-size: 1.5rem
          display: block;
          position: absolute;
          top: 0;
          left: 90px;
          .stress
            color #ab2c2b
            font-style: normal;
        .misc
          display: block;
          position: absolute;
          top: 27px;
          width: 169px;
          height:14px;
          right: 121px;
          font-size: 1.2rem;
          line-height: 1.2rem;
          padding: 0;
    .add-goods-wrap
      .goods-list-wrap
        padding-bottom 30px
        .goods-list
          padding-top 10px
          width:100%;
          .tick
            display: inline
            position: relative;
            width: 46px
            height: 63px
            .select-wrap
              display inline-block
              //border 1px solid #000
              border-radius 50%
              position: absolute;
              left: 25%;
              top: 35%;
              min-width: 19px
              min-height: 19px
              background-color #80B532
              &:after
                content: "";
                width: 11px;
                height: 5px;
                display: block;
                border-bottom: 2px solid #fafafa;
                border-left: 2px solid #fafafa;
                font-size: 0;
                line-height: 0;
                position: absolute;
                left: 3px;
                top: 4px;
                transform: rotate(-45deg);
          .good-icon
            img
              width: 75px;
              height: 75px
          .dsc
            position: absolute
            margin-left: 10px
            height:100px;
            .p1
              width: 230px;
              .good-name
                font-size: 1.5rem;
                color: #4a4a4a;
                text-align left
                letter-spacing 1px
              .item-price
                float: right
                font-size 1.35rem
            .p2
              .special
                max-width: 70%;
                display: inline-block;
                text-align: left;
                font-size: 13px;
                color: #9b9b9b;
                line-height: 20px;
                padding: 10px 0
                text-overflow: ellipsis;
                white-space: nowrap;
            .hot-and-count
              font-size: 1rem
              .hot
                border 1px solid red
                color red
                padding: 2px
              .good-count
                float: right
      .post-to-wrap
        border: 1px solid #ededed
        padding 10px 0
        .address-wrap
          display: inline-block
          text-align center
          float: left;
          height: 50px;
          line-height: 25px;
          margin: 0 10px;
          .post-to
            float: left
            margin-right 3px
          .address
            border: 1px solid #ddd
            float: left
            width: 50px;
            text-align: left;
        .content-wrap
          .d1
            display: inline-block
            width:60%;
            margin-bottom 8px
          .tip
            display: inline-block
          span
            color red


</style>

