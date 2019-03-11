<template>
    <div>
      <profileCarHeader class="header">
        <span slot="left" class="left">
           <i class="iconfont icon-shouye"></i>
        </span>
        <span slot="middle" class="middle ">网易严选</span>//这个一定记得class是left哈因为样式就是
        <span slot="right" class="right">
          <i class="iconfont icon-Icon-sousuo"></i>
          <i class="iconfont icon-gouwuche1"></i>
        </span>
      </profileCarHeader>
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
.header
  background-color #FAFAFA
  .left
    i
      font-size 34px
  .right
    i
      font-size 34px
  .middle
    font-size 36px

</style>
