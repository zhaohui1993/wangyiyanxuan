<template>
    <div class="groupItem-wrap clearfix">
      <div class="groupItem-left">
          <div class="header">
            <img :src="topic.avatar" alt="">
            <span>{{topic.nickname}}</span>
          </div>
          <p class="introduce">{{topic.title}}</p>
          <p class="count">{{topic.subTitle}}</p>
          <div class="info">
            <i class="iconfont icon-yanjing"></i>
            <span>{{computedCount}}</span>
          </div>
      </div>
      <div class="groupItem-right">
        <img :src="topic.picUrl" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        props: {
          topic: Object
        },
        computed: {
          computedCount () {
            const {readCount} = this.topic
            const computedCount = readCount.toString()
            if (computedCount.length <= 4) {
              return computedCount
            } else if (computedCount.length == 5) {
              return (readCount/1000).toString().slice(0, 4) +'k'
            } else {
              return (readCount/10000).toString().split('.')[0] +'w'
            }

          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.groupItem-wrap
  width 750px
  height 325px
  padding 23.8px 22.35px
  box-sizing border-box
  .groupItem-left
    height 100%
    width 422.16px
    float left
    .header
      width 100%
      margin-bottom 40px
      height 28px
      img
        width 40px
        height 40px
        border-radius 50%
        vertical-align middle

    .introduce
      height 109px
      width 100%
      padding-top 22.8px
      box-sizing border-box
    .count
      height 42px
      padding-top 14px
      box-sizing border-box
    .info
      height 27px
      margin-top 27px
  .groupItem-right
    height 100%
    width 278.13px
    float right
    img
      height 278px
      width 278px

</style>
