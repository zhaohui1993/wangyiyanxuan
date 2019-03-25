<!--选妹style style=1-->
<template>
    <div class="mei-wrap">
        <p class="author">
          <img :src="topic.avatar" alt="">
          <!--:src="topic.avatar"-->
          <span>{{topic.nickname}}</span>
        </p>
        <p class="title">
          {{topic.title}}
        </p>
        <div class="posters">
          <img :src="topic.picUrl" alt="">
        </div>
        <div class="info">
          <i class="iconfont icon-yanjing"></i>
          <span>{{computedCount}}人看过</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
          topic: Object
        },
        data () {
            return {

            }
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
.mei-wrap
  width 699px
  height 594px
  padding 26.8px 25.33px
  .author
    width 100%
    margin-bottom 40px
    height 28px
    img
      width 40px
      height 40px
      border-radius 50%
  .title
    width 100%
    height 92px
  .posters
    width 100%
    height 388px
    img
      width 100%
      height 100%

</style>
