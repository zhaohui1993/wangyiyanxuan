<!--
  识物: style: 4
  照片墙效果
-->
<template>
    <div class="photoWall-wrap">
      <div class="title">
        有TA陪伴，每天都很暖
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/185113cfadeda44f777ced2144e97993.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/92f8ba9ede7f68a72ef6190392695931.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/185113cfadeda44f777ced2144e97993.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/185113cfadeda44f777ced2144e97993.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/92f8ba9ede7f68a72ef6190392695931.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/185113cfadeda44f777ced2144e97993.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/92f8ba9ede7f68a72ef6190392695931.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
    export default {
        data () {
            return {}
        },
        mounted () {
          var mySwiper = new Swiper ('.swiper-container', {
            effect : 'coverflow',
            slidesPerView: 3,
            initialSlide: 2,//设定初始化时slide的索引。
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,//slide做3d旋转时Y轴的旋转角度。默认50。
              stretch: 0,//每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
              depth: 100,//slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
              modifier: 3,//depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
              slideShadows : true
            }
            // autoplay:true,
//            effect : 'coverflow',
//            slidesPerView: 3,
//            centeredSlides: true,
//            initialSlide: 2,//设定初始化时slide的索引。
//            coverflowEffect: {
//              //rotate：slide做3d旋转时Y轴的旋转角度。默认50。
//              rotate: 0,
//              //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
//              // stretch: 0,
//              // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
//              // depth: 100,
//              // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
//              modifier: 3,
//              // slideShadows：开启slide阴影。默认 true。
//              slideShadows : false
//            },
          })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .photoWall-wrap
    width 750px
    background-color #F78E00
    height 451px
    .title
      width 100%
      padding 26px 23px
      box-sizing border-box
      background-color: #8d2a50
      height 93px
    .swiper-container
      height 247.33px
      width 100%
    .swiper-slide
      img
        width 250px
        height 250px

</style>
