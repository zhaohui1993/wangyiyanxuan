<template>
    <div>
      <profileCarHeader class="header">
        <span slot="left" class="left" @click="$router.push('/home')">
           <i class="iconfont icon-shouye"></i>
        </span>
        <span slot="middle" class="middle ">网易严选</span>//这个一定记得class是left哈因为样式就是
        <span slot="right" class="right">
          <i class="iconfont icon-Icon-sousuo" @click="$router.push('/search')"></i>
          <i class="iconfont icon-gouwuche1" @click="$router.push('/cart')"></i>
        </span>
      </profileCarHeader>
      <div class="title">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phoneLogin" @click="goPhoneLogin" >
            <i class="iconfont icon-shouji">
            </i>
            <span>
              手机号码登陆
            </span>
      </div>
      <div class="emailLogin"  @click="goEmailLogin" >
        <i class="iconfont icon-youjian">
        </i>
        <span>
              邮箱账号
        </span>
      </div>
      <div class="fastRegistered">
        手机号快捷注册
      </div>
      <div class="communication">
        <div class="weixin">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-xinlang"></i>
          <span>新浪</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
          goPhoneLogin () {
              this.$router.push('/login/phone')

          },
          goEmailLogin () {
            this. $router.push('/login/email')

          }


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

.title
  height 96.391px
  width 100%
  padding 158.933px 0
  text-align: center
  img
    height 89.39px
    width 266.2px


.phoneLogin
  width 675px
  height 93.359px
  background-color red
  border 1px solid black
  margin 31.787px  auto
  text-align center
  line-height 93.359px
  font-size 30px
  i
    font-size 30px
.emailLogin
  width 675px
  height 93.359px
  border 1px solid red
  margin 31.787px  auto
  text-align center
  line-height 93.359px
  font-size 30px
  font-weight bold
  i
    font-size 30px
    font-weight bold
.fastRegistered
  text-align center
.communication
  height 40px
  width 100%
  margin-top 372.5px
  display flex
  justify-content center
  div
    width 175.83px
    height 40px
    border-right 2px solid #7e8c8d
    text-align center
    line-height 40px
    &:last-child
      border-right 2px solid white
    i
      font-size 30px

</style>
