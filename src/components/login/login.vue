<template>
    <div>
      <div class="user-login-wrap">
        <div class="old_user_login">
          <router-link to="/usercontre">
            <label class="top-back">
              <div class="top-border"></div>
            </label>
          </router-link>
          <img src="../img/jti9h2mpjt5dqzys5mww3z5mxexorgu0.png" class="top-logo">
        </div>
        <div class="bg-wrap">
          <div class="login_content">
            <h1>老用户登录</h1>
            <div class="wrap">
              <div class="login-wrap">
                <form id="login-form">
                  <ul class="fm-list">
                    <li>
                      <input type="tel" class="field_ipt" placeholder="请输入手机号">
                    </li>
                    <li class="multi">
                      <input type="password" class="field_ipt" placeholder="请输入密码">
                      <a href="javascript:void(0);" class="multi-a">忘记密码</a>
                    </li>
                  </ul>
                  <div class="setting">
                    <a href="javascript:;">
                      <span>手机号快捷登录</span>
                      <b></b>
                    </a>
                  </div>
                </form>
                <form id="rgt-form">
                  <ul class="fm-list">
                    <li class="multi">
                      <input type="password" class="field_ipt" placeholder="请输入手机号">
                      <a href="javascript:void(0);" class="multi-a">获取验证码</a>
                    </li>
                    <li>
                      <input type="tel" class="field_ipt" placeholder="请输入手机验证码">
                    </li>
                  </ul>
                  <div class="setting">
                    <p>遇到问题?请 <a href="javascript:;">联系客服</a></p>
                    <a href="javascript:;">
                      <span>账号密码登录</span>
                      <b></b>
                    </a>
                  </div>
                </form>
              </div>
              <input type="button" class="btn-login" value="登录">
              <router-link to="/regisiter" class="sign">
                <input type="button" class="btn-regisiter" value="注册">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user-login-wrap
    z-index 1000000
    position: relative
    .old_user_login
      width: 100%;
      height: 141px;
      background: #fff;
      position: absolute;
      .top-back
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 1.3rem;
        top: 46px;
        border: 1px solid #3aad36;
        .top-border
          position: absolute;
          top: 6px
          left: 10px
          height: 14px;
          width: 14px;
          border-left 1px solid #3aad36
          border-top 1px solid #3aad36
          transform: rotate(-45deg)
      .top-logo
        vertical-align middle
        width: 120px;
        height: 61px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 30%;
        left: 38%;
        margin-left: -1.2rem;

    .bg-wrap
      padding-top 141px
      height: 526px;
      background url("http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg") no-repeat
      background-position bottom
      background-size 100% 79%
      .login_content
        height: 325px;
        width:100%;
        box-sizing border-box
        h1
          width: 100%;
          text-align: center;
          color: #037049;
          font-size: 20px;
          line-height: 80px;
          box-sizing: border-box;
          height: 80px;
        .wrap
          height: 243px;
          .login-wrap
            #login-form
              height: 152px;
              .fm-list
                height: 102px;
                li
                  display: block
                  width: 90%;
                  margin: 0 auto;
                  height: 51px;
                  border-bottom: 1px solid #dbdbdb;
                  position: relative;
                  .field_ipt
                    text-align: left;
                    margin: 0 auto;
                    width: 90%;
                    height: 50px;
                    background-color: inherit;
                    outline: none;
                    position: absolute;
                    left: 5%;
                    font-size: 1.5rem;
                    box-sizing: border-box;
                .multi
                  position: relative
                  .field_ipt
                    text-align: left;
                    margin: 0 auto;
                    width: 90%;
                    height: 50px;
                    top: 0
                    background-color: inherit;
                    outline: none;
                    position: absolute;
                    left: 5%;
                    font-size: 1.5rem;
                    box-sizing: border-box;
                  .multi-a
                    border-radius: 7px;
                    text-align: center;
                    width: 96px;
                    height: 31px;
                    position: absolute;
                    text-decoration: none;
                    top: 10px
                    left: 70%;
                    color: #3aad36;
                    border: 1px solid #3aad36;
                    line-height: 31px;
                    font-size: 1.5rem;
              .setting
                height: 50px;
                width:90%;
                margin:0 auto
                position: relative
                span
                  float: right
                  text-align center
                  font-size 15px
                  margin-right 20px
                  line-height: 15px;
                  padding-top: 15px
                  color: #3aad36
                  letter-spacing 1px
                b
                  display block
                  width: 8px;
                  height: 8px;
                  position: absolute
                  right: 10px
                  top: 18px
                  border-top:1px solid #3aad36
                  border-left 1px solid #3aad36
                  transform: rotate(135deg)

            #rgt-form
              display none
              .fm-list
                .multi
                  position: relative
                  .field_ipt
                    text-align: left;
                    margin: 0 auto;
                    width: 90%;
                    height: 50px;
                    top: 0
                    background-color: inherit;
                    outline: none;
                    position: absolute;
                    left: 5%;
                    font-size: 1.5rem;
                    box-sizing: border-box;
                  .multi-a
                    border-radius: 7px;
                    text-align: center;
                    width: 96px;
                    height: 31px;
                    position: absolute;
                    text-decoration: none;
                    top: 10px
                    left: 70%;
                    color: #3aad36;
                    border: 1px solid #3aad36;
                    line-height: 31px;
                    font-size: 1.5rem;
                li
                  display: block
                  width: 90%;
                  margin: 0 auto;
                  height: 51px;
                  border-bottom: 1px solid #dbdbdb;
                  position: relative;
                  .field_ipt
                    text-align: left;
                    margin: 0 auto;
                    width: 90%;
                    height: 50px;
                    background-color: inherit;
                    outline: none;
                    position: absolute;
                    left: 5%;
                    font-size: 1.5rem;
                    box-sizing: border-box;
              .setting
                height: 50px;
                width:90%;
                margin:0 auto
                position: relative
                p
                  float: left;
                  color: #666;
                  font-size: 15px;
                  padding-top 18px
                  padding-left 18px
                  line-height: .4rem;
                span
                  float: right
                  text-align center
                  font-size 15px
                  margin-right 20px
                  line-height: 15px;
                  padding-top: 13px
                  color: #3aad36
                  letter-spacing 1px
                b
                  display block
                  width: 8px;
                  height: 8px;
                  position: absolute
                  right: 10px
                  top: 18px
                  border-top:1px solid #3aad36
                  border-left 1px solid #3aad36
                  transform: rotate(135deg)
          .btn-login
            height: 38px;
            width: 80%;
            display: block
            margin: 5px auto
            text-align center
            font-size: 19px
            outline none
            line-height: 19px;
            border-radius 7px
            letter-spacing 20px
            text-indent 20px
            color: #fff
            background-color #3aad36
          .btn-regisiter
            height: 38px;
            width: 80%;
            display: block
            margin: 10px auto
            text-align center
            font-size: 19px
            outline none
            line-height: 19px;
            border-radius 7px
            letter-spacing 20px
            text-indent 20px
            color: #fff
            background-color #8a8a8a
            opacity:.5

</style>

