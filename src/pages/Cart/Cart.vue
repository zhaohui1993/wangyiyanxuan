<template>
    <div>
      <profileCarHeader>
        <span slot="middle" class="middle elseMiddle">购物车</span>//这个一定记得class是left哈因为样式就是
        <span slot="right" class="right">领卷</span>
      </profileCarHeader>
      <p class="ensure">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮费</span>
      </p>
      <div class="cart-img">
        <i class="iconfont icon-cart"></i>
      </div>
      <p class="addElse">去添加点什么</p>
      <button class="login">登陆</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .elseMiddle
    margin-left 300px
    font-size 34px
    font-weight bold
  .right
    color red
.ensure
  width 100%
  height 23px
  margin-top 30px
  display flex
  justify-content space-around
.cart-img
  width 246.344px
  height 246.344px
  margin 372px auto 0
  i
    font-size 230px

.addElse
  width 100%
  height 30px
  text-align center
  font-size 30px
.login
  display block
  margin 15px auto
  text-align center
  line-height 91.38px
  outline none
  width 476.8px
  height 91.38px
  background-color red
  color white
  font-weight bold
  font-size 40px

</style>
