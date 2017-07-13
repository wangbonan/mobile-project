<template>
      <div>
        <ele-header></ele-header>
        <router-view></router-view>
      </div>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import header from '../header/header.vue'
    export default {
      components:{
          'ele-header': header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>

