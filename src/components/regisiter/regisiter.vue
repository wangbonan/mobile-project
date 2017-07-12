<template>
  <div>
    <div class="user-login-wrap">
      <div class="old_user_login">
        <label class="top-back" onclick="history.back()">
          <div class="top-border"></div>
        </label>
        <img src="../img/jti9h2mpjt5dqzys5mww3z5mxexorgu0.png" class="top-logo">
      </div>
      <div class="bg-wrap">
        <div class="login_content">
          <h1>新用户注册</h1>
          <div class="wrap">
            <div class="regisiter-wrap">
              <form class="rgt-form">
                <ul class="fm-list">
                  <li class="multi">
                    <input type="password" class="field_ipt" placeholder="请输入手机号">
                  </li>
                  <li>
                    <input type="tel" class="field_ipt" placeholder="请设置6-20位密码,包含字母、数字或符号">
                  </li>
                  <li>
                    <input type="tel" class="field_ipt" placeholder="请输入图形验证码">
                    <div class="verifycode_img">
                      <img src="http://account.lifevc.com/Account/NewVerifyCode?t=1499780601227" style="width: 20%; border-left: 0px solid silver;">
                      <img class="img-right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlkqvaGAAAAEHRSTlMAv4DvMCBAz3BgnxDfj69Q1PbwmQAAAXZJREFUSMelVe2ChCAIJPGr1Or9n/Y0duWSLdq7+bXJDIzIKtxhNid4kEhxXV3/mvYznKAbrMvmUmAHfsS2irLCRChD+iOMpfFZcOQIFiQsNrpJACeB8Uee+TN/6tlZ8HJaPvEjgBS0YKjB5RRxyGWlAFIY0wXmC0FXbBwwnEAKugJTN1T5K1wI2DRzlqZWBLDVrJ4LRNAEsNa206+y7xl0geslkJcHFKJ057QLz3Mr4H8HbCUm6mmAR8h0WGxUQ6EBQTaqYKM+0RZ0UJ9oz/AQfxHYbwX++wruO8G7ziNYEgSeVQUzzcRC56eCmKTDZwKkWXJ0AejY3jMx0YhoYN78rE+enWTavV4gc7v0v0SkAvwOWOXQkGzwLYXujp/yOyebCjcKeRuXuoD20k/exTgsTREvZgiJPyroCRJw6z7weR8tYAc3LdHFPNtwxAK/+N7QUuYs8qEmxlSRXx9obtoX8z4gm6QcaQnMDsXCE3gfjYmeyP/FD9AJGvpG5XjtAAAAAElFTkSuQmCC" style="width: 5%;">
                    </div>
                  </li>
                  <li>
                    <input type="tel" class="field_ipt" placeholder="请输入手机验证码">
                    <a href="javascript:void(0);" class="multi-a">获取验证码</a>
                  </li>
                </ul>
                <div class="setting">
                  <p>遇到问题?请 <a href="javascript:;">联系客服</a></p>
                  <a href="javascript:;">
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
        <input type="button" class="btn-login" value="注册">
        <input type="button" class="btn-regisiter" value="登录">
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
          .regisiter-wrap
            height: 152px;
            .rgt-form
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
                li
                  display: block
                  width: 90%;
                  margin: 0 auto;
                  height: 51px;
                  border-bottom: 1px solid #dbdbdb;
                  position: relative;
                  .multi-a
                    border-radius: 7px;
                    text-align: center;
                    width: 96px;
                    height: 31px;
                    position: absolute;
                    text-decoration: none;
                    top: 10px
                    right: 10px;
                    color: #3aad36;
                    border: 1px solid #3aad36;
                    line-height: 31px;
                    font-size: 1.5rem;
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
                  .verifycode_img
                    position: absolute;
                    right: 10px
                    height: 66px;
                    width:100%;
                    top: 15px
                    left: 235px
                    .img-right
                      padding-left 10px
              .setting
                height: 50px;
                width:90%;
                margin:0 auto
                position: relative
                p
                  margin 0 auto
                  float: left;
                  color: #666;
                  font-size: 15px;
                  padding-top 18px
                  padding-left 100px
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
</style>


