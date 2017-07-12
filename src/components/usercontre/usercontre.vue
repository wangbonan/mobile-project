<template>
    <div>
      <div class="usercontre">
        <div class="usercontre-wrap">
          <p class="usercontre-title">
            账户中心
            <a href="javascript:void(0);">
            <label class="setting">设置</label>
            </a>
          </p>


        </div>
        <div class="user-wrap">
          <div class="sign-wrap">
            <span class="state">您还未登录</span>
            <div class="btn-entry">
              <router-link to="/login" class="sign">登录</router-link>
              <span class="split"></span>
              <router-link to="/regisiter" class="sign">注册</router-link>
            </div>
          </div>
        </div>
        <div class="dashboard-order life-dashboard-order">
          <ul>
            <li>
              <a href="javascript:void(0);">
                <span class="item-ico"><!--
                --><span class="icon"></span>
                </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="item-ico"><!--
                --><span class="icon"></span>
                </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="item-ico"><!--
                --><span class="icon"></span>
                </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="javascript:void(0);">
                <span class="item-ico"><!--
                --><span class="icon"></span>
                </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="item-ico"><!--
                --><span class="icon"></span>
                </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="item-ico"><!--
                --><span class="icon"></span>
                </span>
                <span class="item-title">待支付</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="dashboard">
          <ul style="margin-bottom: 1rem;">
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_list_cm.png" class="item-i">
                <span class="item-title">我的订单</span>
                <span class="arr-r"></span><!--
          --></a>
            </li>
          </ul>
          <ul style="margin-bottom: 1rem;">
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_coupon_cm.png" class="item-i">
                <span class="item-title">我的优惠券</span>
                <span class="arr-r"></span>
                <!----></a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_pig_cm.png" class="item-i">
                <span class="item-title">现金积分</span>
                <span class="arr-r"></span>
                <!----></a>
            </li>
            <li>
              <a>
                <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_invoice.png" class="item-i">
                <span class="item-title">关于发票</span>
                <span class="arr-r"></span>
                <!----></a></li>
          </ul>
          <ul style="margin-bottom: 1rem;">
            <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_gear_cm.png" class="item-i"> <span
              class="item-title">密码和登录信息</span> <span class="arr-r"></span> <!----></a></li>
            <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_dialoguebubble3_cm.png" class="item-i"> <span
              class="item-title">老会员建议</span> <span class="arr-r"></span> <!----></a></li>
            <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_customerservice_cm.png" class="item-i"> <span
              class="item-title">客户服务</span> <span class="arr-r"></span> <!----></a></li>
            <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_currentnode_cm.png" class="item-i"> <span
              class="item-title">地址管理</span> <span class="arr-r"></span> <!----></a></li>
            <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/sms_cm.png" class="item-i"> <span
              class="item-title">手机验证</span> <span class="arr-r"></span> <!----></a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .usercontre
    .usercontre-wrap
      position: fixed;
      top: 0;
      left:0
      right 0
      z-index:666;
      .usercontre-title
        height: 48px;
        width:100%;
        font-size: 2rem
        text-align center
        line-height: 48px;
        color #fff
        background-color: #89BE48;
      a
        .setting
          font-size: 1.8rem;
          color: #fff;
          line-height: 4rem;
          margin-right: 2%;
          position: absolute;
          right: 2%;
          top: 0;
          z-index: 9;


    .user-wrap
      margin-top 48px
      width:100%;
      height: 9rem;
      background: url("../img/background.png") no-repeat
      background-position center
      background-size 100% 100%
      .sign-wrap
        width: 100%;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        padding: .5rem 0 0;
        .state
          text-align: center
          font-size: 1.6rem
          line-height: 3rem;
          display: block
          color: #222
        .btn-entry
          display inline-block
          color #009c42
          padding:0 10px
          height: 3rem;
          background hsla(0,0%,100%,.4)
          border 1px solid #009c42
          border-radius 1.5rem
          margin:.5rem auto 0
          .sign
            text-decoration none
            margin:0
            color #009c42
            padding:0 10px
            background: transparent
            text-align: center;
            font-size: 1.6rem;
            line-height: 3rem;
          .split
            width: 1px;
            height: 1.2rem;
            display: inline-block
            border-left: 1px solid #009c42
    .dashboard-order
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border-top: 1px solid #eee;
      margin: 0 auto;
      ul
        width: 100%;
        height: 5rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        margin: 0;
        padding: 0;
        li
          width: 33%;
          height: 2.5rem;
          float: left;
          border-right: 1px solid #dedede;
          line-height: 2rem;
          margin: 1.5rem 0 0;
          padding: 0;
          a
            display: block;
            text-align: center;
            color: #585858;
            text-decoration: none;
            padding: 0;
            .item-ico
              display: inline-block
              position: relative
              text-align: center;
              color: #585858;
              line-height: 2rem;
              .icon
                display: inline-block;
                height: 3rem;
                width: 3.5rem;
                background-repeat: no-repeat;
                background-position left
                background-size: 100%
                background-image  url("../img/706i5agjj6hqfiuf8hza85o0uc7fnbll.png")
            .item-title
              display: inline-block;
              vertical-align: 56%;
              font-size: 1.2rem;
              color: #585858;
              line-height: 2.5rem;
              text-decoration: none;
    .dashboard
      margin-bottom: 1rem;
      li
        width: 100%;
        height: 5rem;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        margin: -1px auto 0;
        padding:0
        a
          width: 100%;
          height: 5rem;
          display: block;
          .item-i
            width: 2.5rem;
            overflow: hidden;
            display: inline-block;
            float: left;
            margin: 1.3rem 1.1rem 0;
            vertical-align: middle;
            border: 0 none;
          .item-title
            display: inline-block;
            line-height: 5rem;
            text-decoration: none;
            float: left;
            vertical-align: 0;
            font-size: 1.4rem;
            color: #585858;
          .arr-r
            width: 10px;
            height: 10px;
            display: inline-block;
            float: right;
            border-right: 2px solid #bbb;
            transform: rotate(45deg);
            border-top: 2px solid #bbb;
            margin: 25px 10px 0 0;
</style>

