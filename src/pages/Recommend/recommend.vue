<template>
    <div id="app">
      <div class="header">
        <div class="blackMove">
          ×
        </div>
        <div class="top-bar">
          <div class="top-bar-left">
            <i class="iconfont icon-shouye"></i>
          </div>
          <div class="top-bar-middle">
            <span class="active">发现</span>
            <span>甄选之家</span>
          </div>
          <div class="top-bar-right">
            <i class="iconfont icon-gouwuche1"></i>
            <i class="iconfont icon-Icon-sousuo"></i>
          </div>
        </div>

        <ul class="nav">
          <li v-for="(nav, index) in navList">
            {{nav.tabName}}
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  import {reqNavList} from '../../api/index'
    export default {
        data () {
            return {
                navList: []
            }
        },
       async mounted () {
         const result = await reqNavList()
         if (result.code == 0) {
           this.navList = result.data
         }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  width 750px
  .blackMove
    width 100%
    height 51px
    background-color #7e8c8d
  .top-bar
    width 100%
    background-color blue
    padding 15.893px 29.8px
    box-sizing border-box
    height 74px
    display flex
    justify-content space-between
    .top-bar-left
      i
        font-size 30px
    .top-bar-middle
      span
        font-weight bold
        &.active
          color red
          font-size 30px
    .top-bar-right
      i
        font-size 30px
  .nav
    height 74.5px
    line-height 74.5px
    width 100%
    background-color pink
    display flex
    li
      padding 0 4px
      height 74.5
      margin 0 10px
      border-bottom 2px solid white




</style>
