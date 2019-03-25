<template>
    <div class="updategoods-wrap">
      <div class="title">
        春天的时髦，从一件T恤开始
      </div>
      <div class="decs">
        怎么搭都不失手的新款T恤清单！
      </div>
      <ul class="update-goods">
        <li v-for="(item, index) in [1,2,3,4,4,5,5,65]">
          <img src="http://yanxuan.nosdn.127.net/99331676356acd644842c43ad74bef7f.png" alt="">
        </li>
      </ul>
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
.updategoods-wrap
  width 100%
  height 565px
  padding 14px 23px
  box-sizing border-box
  background-color chartreuse
  .title
    height 46px
    margin-bottom 12px
  .decs
    height 42px
    padding-top 14px
    box-sizing border-box
  .update-goods
    height 344px
    width 100%
    li
      float left
      width 166px
      height 166px
      margin-bottom 5.5px
      img
        height 100%
        width 100%

</style>
