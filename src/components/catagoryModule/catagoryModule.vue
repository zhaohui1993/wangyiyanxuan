<template>
    <div class="catagoryModule-main">
      <div class="catagoryModule-banner">
        <img v-lazy="category.titlePicUrl" alt="" :key="category.titlePicUrl">
      </div>
      <div class="catagoryModule-goos-wrap"  :class="'goodsGrid-wrapper-' + cataIndex">
        <!--:class=`catagoryModule-goos-wrap${cataIndex}`-->
        <ul class="catagoryModule-goods">
          <li v-for="(item, index) in category.itemList" :key="index" >
            <img v-lazy="item.primaryPicUrl" alt="">
            <p>{{item.name.length>10? item.name.slice(0,10)+'...' :item.name}}</p>
            <p style="color: red">¥{{item.retailPrice}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {

        data () {
            return {}
        },
        props: {
          category: Object,
          cataIndex:Number
        },
        mounted () {
//          ${cataIndex}
         console.log(this.cataIndex, this, `.catagoryModule-goos-wrap${this.cataIndex}`)
//
//          let scroll = new BScroll(`.catagoryModule-goos-wrap${this.cataIndex}`, {
//            scrollX: true
//          })
          let scroll = new BScroll(`.goodsGrid-wrapper-${this.cataIndex}`, {
            scrollX: true
          })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.catagoryModule-main
  width 750px
  height 781.98px
  .catagoryModule-banner
    width 100%
    height 369.98px
    margin-bottom 50px
    img
      width 100%
      height 400px
  .catagoryModule-goos-wrap
    height 362px
    width 750px
    padding 0 30px 30px 30px
    box-sizing border-box
    .catagoryModule-goods
      float left
      display flex
      li
        height 331.98px
        margin-right 20px
        width 200px
        img
          width 200px
          height 208px
          margin-bottom 12px
        p
          width 200px


</style>
