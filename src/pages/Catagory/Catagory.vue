<template>
    <div>
      <div id="header">
        <input type="text" placeholder="搜索商品" @click="goTo">
      </div>
      <div id="contener">
        <div class="contener-left-wrap">
          <!--里面自动撑开-->
          <ul class="contener-left">
            <li v-for="(catagory, index) in catagorysList.categoryL1List" :key="catagory.id" @click="goDetail(index)" :class="{active:CatagoryIndex == index}">
              <span>{{catagory.name}}</span>
            </li>
          </ul>

        </div>
        <div class="contener-right-wrap">
          <!--里面自动撑开-->
          <div class="contener-right" v-if="catagorysList.categoryL1List">
            <div class="banner">
              <img v-lazy="'http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg'" alt="">
            </div>
            <CatagoryList :catagoryList="catagorysList.categoryL1List[CatagoryIndex]"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  import CatagoryList from '../../components/CatagoryList/CatagoryList.vue'
    export default {
        data () {
            return {
                CatagoryIndex: 0
            }
        },
        async mounted () {
            await this.$store.dispatch('getCatagorysList')
            let leftWrap = new Bscroll ('.contener-left-wrap',{
                click: true,
                scrollbar: {
                  fade: true,
                  interactive: false // 1.8.0 新增
                },
            })
            let rightWrap = new Bscroll ('.contener-right-wrap',{
              click: true
            })
        },
        computed: {
          ...mapState({
            catagorysList: state => state.catagorys.catagorysList
          })
        },
        methods: {
          goTo () {
              console.log('lalalalallka')
          },
          goDetail (index) {
            this.CatagoryIndex = index

          }
        },
        components: {
          CatagoryList,
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #header
    position fixed
    height 87.41px
    padding-left 29.8px
    box-sizing border-box
    width 100%
    input
      position absolute
      left 29.8
      top 50%
      margin-top -28px
      width 675px
      height 55.63px
      border-radius 4px
      background-color #EDEDED
      outline none
  #contener
    height 1242.66px
    width 100%
    box-sizing border-box
    padding-top 87.41px
    display flex
    .contener-left-wrap
      width 160.91px
      height 1150px
      overflow hidden
      .contener-left
        padding-top 20px
        box-sizing border-box
        li
          height 49.66px
          width 100%
          margin-top 39.733px
          text-align center
          &.active
            color red
            border-left 2px solid red
    .contener-right-wrap
      width 589px
      height 1168.16px
      padding 29.8px
      box-sizing border-box
      overflow hidden
      .banner
        img
          width 528px
          height 192px
          margin-bottom 32px


</style>
