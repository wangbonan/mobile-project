<template>
    <div>
      <div class="co">这就是MAP标签的用法啦</div>
      <div class="co">不做更多展示啦</div>
      <div class="co">怎么回去呢?</div>
      <div class="co">鼠标右键单击'返回' 就好啦</div>
      <div class="co a" onclick="history.back()">或者点我吧</div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .co
    padding: 20px
    color red
    background yellow
    font-size 2rem
    border-bottom 2px solid #fff
  .a
    background skyblue
    color #fff

</style>

