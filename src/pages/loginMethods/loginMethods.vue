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
      <div class="phoneLogin" v-show="isPhone">
        <div class="phone">
          <input type="text" v-model="userName" placeholder="请输入手机号" @blur="yanzheng">
        </div>
        <div class="pwd">
          <input type="password" v-model="pwd" placeholder="请输入验证码">
        </div>
      </div>
      <div class="emailLogin" v-show="!isPhone">
        <div class="phone">
          <input type="text" v-model="userName" placeholder="请输入邮箱" @blur="youxiangyanzheng">
          <!-- @blur="yanzheng"-->
        </div>
        <div class="pwd">
          <input type="password" v-model="pwd" placeholder="请输入密码">
        </div>
      </div>
      <div class="loginButton" >
        <!--@click="yanzheng"-->
        登陆
      </div>
      <div class="elseLogin">
        其他方式登陆
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              isPhone: true,
              userName:'',
              pwd:''
            }
        },
        mounted () {
           if (this.$route.params.id === 'email'){
              this.isPhone = false
           }
        },
        methods: {
          yanzheng () {
            const {userName} = this
            if (userName) {

              const reg = /^1[3,9][0-9]{9}$/

              if (!/^1[3,9][0-9]{9}$/.test(userName*1)) {
                console.log('手机号不正确')
              }
            }

          },
          youxiangyanzheng () {
            const {userName} = this
            if (userName) {
              if (!/^\w+(\.\w+){0,2}@[A-z0-9]+(\.[A-z]{1,5}){1,2}/.test(userName*1)) {
                console.log('邮箱不正确')
              }
            }

          },
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
    text-align  center
    img
      height 89.39px
      width 266.2px
  .phoneLogin, .emailLogin
    .phone
      text-align center
      input
        height 91px
        border-bottom 1px solid #F78E00
        font-size 28px
        width 675px

    .pwd
      text-align center
      input
        height 91px
        border-bottom 1px solid #F78E00
        font-size 28px
        width 675px

  .loginButton
    width 677px
    height 95px
    margin 15px auto
    color white
    font-weight bold
    text-align center
    line-height 95px
    background-color red
  .elseLogin
    width 677px
    height 95px
    margin 15px auto
    color red
    font-weight bold
    text-align center
    line-height 95px
    border 2px solid red
</style>
