<template>
  <div class="header">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
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
    position relative
    height 99px
    font-size 24px
    width 100%
    padding 0 30px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    /*float left*/
    .left
      height 99px
      line-height 99px
    .middle


    .right
      height 99px
      line-height 99px

</style>
