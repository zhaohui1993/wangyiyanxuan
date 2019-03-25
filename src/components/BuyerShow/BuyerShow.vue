<template>
    <div>
      <div class="homeBuyerShow-wrapper">
        <div class="homeBuyerShow-banner">
          <img v-lazy="topic.bannerInfo.picUrl" alt="" :key="index">
        </div>
        <div class="homeBuyerShow-desc">{{topic.content}}</div>
        <div class="homeBuyerShow-info">
          <div class="homeBuyerShow-info-left">
            <div class="homeBuyerShow-info-avatar">
              <img src="https://yanxuan.nosdn.127.net/c88ef9679710c65a383d09117181c262.jpg" alt="">
            </div>
            <div class="homeBuyerShow-info-name">赵慧会</div>
          </div>
          <div class="homeBuyerShow-info-right">
            <div class="homeBuyerShow-info-goodNum">20</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        props: {
          topic:Object,
          index:Number
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.homeBuyerShow-wrapper
  width 342.69px
  margin-bottom 14.9px
  border 1px solid red
  .homeBuyerShow-banner
    width 100%
    img
      width 100%
  .homeBuyerShow-desc
    width 310.906px
    padding 17.880px 15.893px 0 15.893px
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  .homeBuyerShow-info
    padding-top 20px
    display flex
    .homeBuyerShow-info-left
      width 166px
      height 47px
      display flex
      img
        width 48px
        height 48px
    .homeBuyerShow-info-right
      width 91px
      height 66px

</style>
