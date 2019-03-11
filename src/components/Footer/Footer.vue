<template>
    <div>
      <ul id="footerContener">
        <li class="footItem" :class="{active:$route.path === '/home'}" @click="goTo('/home')">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </li>
        <li class="footItem" :class="{active:$route.path === '/catagory'}" @click="goTo('/catagory')">
          <i class="iconfont icon-fenleiguanli"></i>
          <span>分类</span>
        </li>
        <li class="footItem" :class="{active:$route.path === '/recommend'}" @click="goTo('/recommend')">
          <i class="iconfont icon-tupian"></i>
          <span>实物</span>
        </li>
        <li class="footItem" :class="{active:$route.path === '/cart'}"  @click="goTo('/cart')">
          <i class="iconfont icon-gouwuche1"></i>
          <span>购物车</span>
        </li>
        <li class="footItem" :class="{active:$route.path === '/profile'}" @click="goTo('/profile')">
          <i class="iconfont icon-tubiaozhizuomoban"></i>
          <span>个人</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              isActive: false
            }
        },
        methods: {
          goTo (path) {
            this.$router.push(path)
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../comments/stylus/mixins.styl"
#footerContener
  position absolute
  bottom 0
  left 0
  width 750px
  height: 97px
  border 1px solid #eee
  display flex
  justify-content space-around
  align-items center
  background-color aqua
  .footItem
    display flex
    flex-direction column
    align-items center
    &.active
      color red
    span
      font-size 24px
      margin-top 7px
    i
      font-size 40px

</style>
