<template>
    <div>

      <div id="header">
        <a href="javascript:;" class="logo">
          <h1>
            网易严选
          </h1>
        </a>
        <div class="searchTop">
          <input type="text" id="input-test"  />
          <div class="placeholder">
            <i class="iconfont icon-Icon-sousuo searchicon" ></i>
            <span class="searchfont" @click="goSearchPages">搜索商品,共***件好物</span>
          </div>

        </div>
        <div class="login" @click="$router.push('/profile')">登陆</div>
      </div>
      <div id="contener">
        <div class="mask" v-show="isMaskShow"></div>
          <div class="nav">
            <div class="list-wrap">
              <ul class="navCatagory">
                <li :class="{active: index === 0}" @click="goRed(0)">
                  <a href="javascript:;">
                    推荐--
                  </a>
                </li >
                <li @click="goRed(1)" :class="{active: index === 1}">
                  <a href="javascript:;">
                    居家
                  </a>
                </li>
                <li @click="goRed(2)" :class="{active: index === 2}">
                  <a href="javascript:;">
                    服饰鞋包
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    服装
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    居家
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    服饰鞋包
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    美食酒水
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    居家
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    服饰鞋包
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    美食酒水
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    居家
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    服饰鞋包
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    美食酒水
                  </a>
                </li>
              </ul>
            </div>

            <div class="more" @click="goToMore">
              <i class="iconfont icon-fangxiang-xiangxia toggleArrow"  :class="{toggle:isRotate}"></i>
            </div>
            <div class="mengMing" v-show="isMaskShow" >
              <div class="allchannel clearfix">
                <div class="allchannel-left clearfix">
                  全部频道
                </div>
              </div>
              <div class="moreCate">
                <ul>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                  <li>推荐</li>
                </ul>
              </div>

            </div>

          </div>
          <div class="scroll-wrap">
            <div class="scrollList">
              <div class="swiper-container zidingyi">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img v-lazy="'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0'" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img v-lazy="'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0'" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img v-lazy="'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0'" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img v-lazy="'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0'" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img v-lazy="'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img v-lazy="'https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0'" alt="">
                  </div>

                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination">

                </div>

              </div>
              <div class="slogon">
                <p>
                  <i class="iconfont icon-duigou"></i>
                  <span>网易自营品牌</span>
                </p>
                <p>
                  <i class="iconfont icon-duigou"></i>
                  <span>30天无忧退货</span>
                </p>
                <p>
                  <i class="iconfont icon-duigou"></i>
                  <span>48小时快速退款</span>
                </p>
              </div>
              <ul class="showNav" v-if="homeList.showNav">
                <li v-for="(homeItem, index) in homeList.showNav.kingKongList">
                  <img v-lazy="homeItem.picUrl" alt="">

                  <p>{{homeItem.text}}</p>
                </li>
              </ul>
              <!--老板推荐-->
              <div class="bossRecommend">
                <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
              </div>
              <ul class="shoppingGuide"  v-if="homeList.sceneLightShoppingGuideModule">
                <li v-for="(item, index) in homeList.sceneLightShoppingGuideModule"  :key="index" :style="{backgroundColor:item.styleItem.titleColor}">
                  <p class="p1">{{item.styleItem.desc}}</p>
                  <p class="p2">{{item.styleItem.desc}}</p>
                  <img :src="item.styleItem.picUrlList[0]" alt="" class="imgLeft">
                  <img :src="item.styleItem.picUrlList[1]" alt="" class="imgRight">
                </li>
              </ul>
              <!--私人定制-->
              <div class="private" >
                <div class="privateTitle">私人定制</div>
                <div class="swiper-container privateImg">
                  <div class="swiper-wrapper"  v-if="homeList.personalShop">
                    <div class="swiper-slide li" v-for="(pS, index) in personalShopArr">
                        <div class="privateBlock" v-for="(item, index) in pS">
                          <img :src="item.primaryPicUrl" alt="" >
                          <p>{{item.name}}¥{{item.counterPrice}}</p>
                        </div>
                    </div>
                  </div>
                  <!-- 如果需要分页器 -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <!--隔板-->
              <Partition/>
              <!--限时购-->
              <div class="timetobuy ">
                <div class="timetobuy-header ">
                  <span>限时购</span>
                  <div class="time">
                    <p class="figure">03</p>
                    <span>:</span>
                    <p class="figure">04</p>
                    <span>:</span>
                    <p class="figure">05</p>
                  </div>
                  <div class="more">
                    更多>
                  </div>
                </div>
                <div class="timetobuy-goods ">
                  <ul v-if="homeList.flashSaleModule">
                    <li v-for="(item, index) in homeList.flashSaleModule.itemList">
                      <img :src="item.picUrl" alt="">
                      <p>
                        <span>¥{{item.activityPrice}}</span>
                        <span>¥{{item.originPrice}}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!--隔板-->
              <Partition/>
              <!--新品首发-->
              <div class="timetobuy ">
                <div class="timetobuy-header ">
                  <span>新品首发</span>
                  <p class="more">更多></p>
                </div>
                <div class="timetobuy-goods ">
                  <ul v-if="homeList.newItemList">
                    <!--v-for="(item, index) in newItemListArr"-->
                    <li v-for="(item, index) in homeList.newItemList" v-if="index<6" :key="index">
                      <img v-lazy="item.primaryPicUrl" alt="">
                      <p>
                        <span>{{item.name.length>10? item.name.slice(0,10)+'...':item.name}}</span>
                        <span>¥{{item.retailPrice}}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!--隔板-->
              <Partition/>
              <!--人气推荐-->
              <div class="recommended">
               <Header>
                 <span slot="left" class="left">人气推荐</span>
                 <span slot="right" class="right">更多></span>
               </Header>
                <div class="recommend-main">
                  <div class="recommend-top" v-for="(popularItem, index) in homeList.popularItemList"
                       :key="index"  v-if="index<1">
                    <img :src="popularItem.primaryPicUrl" alt="">
                    <div class="jieshao">
                      <p>{{popularItem.name}}</p>
                      <p>{{popularItem.simpleDesc}}</p>
                      <p>***{{popularItem.retailPrice}}</p>
                    </div>
                  </div>
                  <ul class="recommend-bottom">
                    <li  v-for="(popularItem, index) in homeList.popularItemList"
                         :key="index"  v-if="index>=1">
                      <img :src="popularItem.primaryPicUrl" alt="">
                      <p>{{popularItem.name.length>10?popularItem.name.slice(0,10)+"...":popularItem.name}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <!--专题精选-->
              <div class="project">
                <Header>
                  <span slot="left" class="left">专题精选</span>
                  <span slot="right" class="right">更多></span>
                </Header>
                <div class="project-main-wrap">
                  <ul class="project-main">
                    <li v-for="(topic, index) in homeList.topicList" :key="index">
                      <img :src="topic.scenePicUrl" alt="">
                      <p class="projectP1 ellipsis">{{topic.title}}</p>
                      <p class="projectP2">{{topic.subtitle}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <!--隔板-->
              <Partition/>
              <!--众筹-->
              <div class="crowdfunding">
                <Header>
                  <span slot="left" class="left">众筹</span>
                  <span slot="right" class="right">更多></span>
                </Header>
                 <ul class="crowdfunding-main">
                   <li v-for="(zhongChou, index) in homeList.zhongChouList" :key="index">
                     <img :src="zhongChou.picUrl" alt="">
                     <div class="crowdfunding-product">
                       <p class="crowdfunding-title">{{zhongChou.name}}</p>
                       <p class="crowdfunding-price">{{zhongChou.retailPrice}}</p>
                       <div class="progress">
                         <div class="progressActive" :style="{width: zhongChou.progress+'%'}"></div>
                       </div>
                       <div class="crowdfunding-support">
                         {{zhongChou.progress}}%
                       </div >

                       <p class="crowdfunding-supportNum">{{zhongChou.supportNum}}</p>
                     </div>
                   </li>

                 </ul>
              </div>
              <!--隔板-->
              <Partition/>
              <div class="CatagoryModules" v-for="(category, index) in homeList.categoryModule" :key="index">
                <CatagoryModules :category="category" :cataIndex="index"/>
              </div>
              <!--声明-->
              <div class="ftWrap">
                <div class="ftContent">
                  <div class="bd">
                    <a class="goApp" href="javascript:;">下载APP</a>
                    <a class="goPc" href="javascript:;">电脑版</a>
                  </div>
                  <p class="copyRight">
                    <span>网易公司版权所有 © 1997-</span>
                    <span>2019</span>
                    <br>
                    <span>阿扣到此一游</span>
                    <span>hiahiahia</span>
                    <br>
                    <span>(((┏(;￣▽￣)┛装完逼就跑</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
//  import Search from '../Search/Search.vue'
    export default {
        data () {
            return {
              isMaskShow: false,
              isRotate: false,
              index: 0
            }
        },
//        components: {
//          Search
//        },
        async mounted () {

          let scroll = new BScroll('.list-wrap', {
            scrollX: true,
            click: true
          })
          window.addEventListener('scroll',  () =>  {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
              document.body.scrollTop
            console.log("gao",scrollTop)
          })

          await this.$store.dispatch('getHomeList')
          var mySwiper = new Swiper ('.privateImg',{
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'custom',
              clickable: true,
              // 自定义分页器
              renderCustom: function (swiper, current, total) {
                var customPaginationHtml = "";
                for (var i = 0; i < total; i++) {
                  //判断哪个分页器此刻应该被激活
                  if (i === (current - 1)) {
                    customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                  } else {
                    customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                  }
                }
                return customPaginationHtml;
              }
            },

          }
//            {
//            loop: true,
//            autoplay: 3000,//自动轮播
//            speed: 600,
//            // 如果需要分页器
//            pagination: '.swiper-pagination',
//            paginationType: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置
//            //下面方法可以生成我们自定义的分页器到页面上
//            paginationCustomRender: function(swiper, current, total) {
//              var customPaginationHtml = "";
//              for(var i = 0; i < total; i++) {
//                //判断哪个分页器此刻应该被激活
//                if(i == (current - 1)) {
//                  customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
//                } else {
//                  customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
//                }
//              }
//              return customPaginationHtml;
//            }
//          }
        )
          var swiper = new Swiper ('.zidingyi', {
            loop: true, // 循环模式选项
            pagination: {
              el: '.swiper-pagination',
              //type: 'custom',
              clickable: true,

            },
          })

          new BScroll('.scroll-wrap',{
            click: true
          })

          let project = new BScroll('.project-main-wrap', {
            scrollX: true,
            click: true
          })
        },
        methods: {
          goToMore () {
              //切换isMaskShow 状态
            this.isMaskShow = !this.isMaskShow
              //
            this.isRotate = !this.isRotate
          },
          goRed (index) {
              console.log('1111111')
            this.index = index
          },
          goSearchPages () {
//              console.log('search')
            this.$router.push('/search')
          },


        },
        computed: {
          ...mapState({
            homeList: state => state.home.homeList
          }),
          personalShopArr () {
            const {personalShop} = this.homeList
            const bigArr = [];
            let smallArr = []
            personalShop.forEach((item, index) => {
              if (item.name.length>10){
                item.name = item.name.slice(0,10) + '...'
              }
              if (smallArr.length === 0) {
                bigArr.push(smallArr)
              }
              smallArr.push(item)
              if (smallArr.length === 3) {
                smallArr = []
              }
            })
            return bigArr
          },
//          newItemListArr () {
////              debugger
//            const {newItemList} = this.homeList
//            return newItemList.reduce((pre, next) => {
//              next.name = next.name.slice(0,10)+'...'
//              if (pre.length >= 6){
//                  return
//              }
////               debugger
//              pre.push(next)
////               debugger
//              return pre
//            }, [])
//
//          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

#header
  width 750px
  height 87.41px
  padding 15.893px 29.8px
  background-color aqua
  box-sizing border-box
  display flex
  align-items center
  .logo
    h1
      width 137.078px
      height 39.719px
      margin-right 19.867px
      font-size 32px
  .searchTop
    position relative
    height 55.625px
    width 442.078px
    #input-test
      height 55.625px
      width 442.078px
      border-radius 4px
      outline hidden
    .placeholder
      position absolute
      left 0
      top 0
      height 55.625px
      width 442.078px
      text-align center
      line-height 55.625px

      .searchfont
        margin-left 5px
      .searchicon
        font-size 24px



  .login
    width 73.5px
    height 39.719px
    margin-left 15.893px
    border 1px solid red
    text-align  center
    line-height 39.719px
    border-radius 6px
#contener
  position relative
  width 100%
  height 100%

  .mask
    position absolute
    left 0
    top 0
    z-index 2
    width 100%
    height 100%
    background-color rgba(0,0,0,.5)

  .nav
    position relative
    width 750px
    height 60px

    .list-wrap
      width 625px
      height 60px
      overflow hidden
      .navCatagory
        height 60px
        float left
        display flex
        /*width 2000px*/
        /*background-color #F78E00*/
        li
          /*float left*/
          padding 0 17.893px
          height 60px
          line-height 60px
          text-align center
          border-bottom 2px solid rgba(0,0,0,0)
          margin 0, 0, 5px, 20px

          &.active
            border-bottom 2px solid red
            a
              color red
          a
            font-size 26px
            white-space nowrap
    .more
      position absolute
      right 0
      top 0
      z-index 4
      background-color white
      width 125px
      height 60px
      text-align center
      i
        position absolute
        top 50%
        left 50%
        font-size 30px
        width 30px
        height 20px
        transition: all .3s;
        &.toggle
          transform:rotate(180deg);
          /*transition: all .3s;*/

    .mengMing
      position absolute
      left 0
      top 0
      width 750px
      z-index 3

      .allchannel
        .allchannel-left
          width 625px
          height 60px
          line-height 60px
          background-color white
          padding-left 30px
          box-sizing border-box
      .moreCate
        background-color white
        ul
          display flex
          flex-wrap wrap
          padding-top 23.840px
          width 750px
          li
            width 149px
            height 55.625px
            border 1px solid #ccc
            background-color #fafafa
            text-align center
            line-height 55.625px
            margin 0 0 39.733px 29.8px
            border-radius 4px

  .scroll-wrap
    width 750px
    height 1085px
    overflow hidden
    .scrollList
      .slogon
        height 32px
        width 750px
        padding 16px 0

        p
          width 250px
          height 32px
          float left
          text-align center
          color red
          i
            font-size 24px



      .showNav
        height 392px
        width 750px
        display flex
        justify-content space-around
        flex-wrap wrap
        li
          width 109.266px
          height 154.953px
          margin 9.933px 19.867px 0 19.867px
          display flex
          flex-direction column
          align-items center
          img
            width 109.27px
            height 109.27px
          p
            margin-top 9.933px




      .bossRecommend
        width 750px
        height 158.92px
        background-color #F78E00
        overflow hidden
        &:hover img
          transform: scale(1.4);
        img
          width 750px
          height 158.92px

      .shoppingGuide
        height 611.84px
        width 100%
        padding 9.933px 29.8px 29.8px 25.827px
        box-sizing border-box
        display flex
        flex-wrap wrap
        li
          height 282.09px
          margin 3.973px 0px 0px 3.973px
          padding 19.867px 0 0 19.867px
          box-sizing border-box
          width 340.45px
          /*background-color #eeeee*/
          .p1
            padding-left 9.933px
            height 31px
          .p2
            margin 9.933px 0
            padding-left 9.933px
            height 23px
          .imgLeft
            height 149px
            margin-right 3.973px
            width 149px
          .imgRight
            height 149px
            width 149px


      .private
        width 750px
        height 486.7px
        .privateTitle
          width 750px
          padding 0 29.8px
          box-sizing border-box
          height 99.33px
          line-height 99.33px
          font-size 30px
          font-weight bold
        .privateImg
          /*float left*/
          /*height 313.38px*/
          position: relative;
          height 387.38px
          overflow hidden
          .swiper-wrapper
            position relative
            .li
              /*display flex*/
              /*justify-content space-around*/
              /*width 100%*/
              /*height 100%*/
              text-align: center;
              font-size: 18px;
              background: #fff;
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              align-items: center;
              .privateBlock
                width 214.55px
                height 313.88px
                display flex
                flex-direction column
                align-items center
                img
                  margin-bottom 11.92px
                  width 214.55px
                  height 214.55px
                p
                  font-size 24px



          .swiper-pagination
            position absolute
            left 0
            bottom 10px
            width: 100%
            height: 10px

            /*包裹自定义分页器的div的位置等CSS样式*/
            &.swiper-pagination-custom
              bottom: 10px;
              left: 0;
              width: 100%;
              height: 50px
      .timetobuy
        height 735px
        width 100%
        padding 0 30px
        box-sizing border-box
        .timetobuy-header
          height 99px
          font-size 24px
          width 100%
          /*float left*/
          >span
            float left
            height 99px
            line-height 99px
          .time
            float left
            margin-left 12px
            width 219.38px
            height 100px
            display flex
            align-items center

            .figure
              width 36px
              height 36px
              line-height: 36px
              text-align center
              font-weight bold
              color white
              background-color #7e8c8d
              margin 0 10px
              float left
            span
              float left
           /* div
              width 36px
              height 36px
              background-color rgba(0,0,0,.4)
              font-weight bold*/
          .more
            float right
            height 99px
            line-height 99px

        .timetobuy-goods
          height 636px
          width 100%
          ul
            width 100%
            height 100%
            display flex
            flex-wrap wrap
            li
              width 216px
              height 318px
              display flex
              flex-direction column
              align-items center
              justify-content space-around
              margin-right 10px
              img
                width 216px
                height 216px


      .recommended
        .recommend-main
          padding 0 30px
          box-sizing border-box
          .recommend-top
            width 685.391px
            height 278.125px
            margin 0px 14.9px 19.867px 14.9px
            display flex
            img
              width 278.125px
              height 278.125px
              margin-right 28.9px
            .jieshao
              display flex
              flex-direction column
              justify-content center
              p
                font-size 24px
                height 39px
                line-height 39px
          .recommend-bottom
            width 326.28px
            height 100%
            display flex
            li
              width 214.55px
              height 313.375px
              margin-left 19.867px
              display flex
              flex-direction column
              img
                width 214.55px
                height 214.55px
                margin-bottom 11.92px





      .project
        .project-main-wrap
          width 750px
          height 427.41px
          paddiing 0 29.8px 29.8px 29.8px
          box-sizing border-box
          .project-main
            float left
            display flex
            li
              width 476.8px
              height 390.61px
              margin-right 31px
              display flex
              flex-direction column
              img
                width 476.8px
                height 265.22px
                margin-bottom 19.853px
              .projectP1
                width 446.98px
                height 40.72px
                margin-bottom 5.960px
                padding 0 19.867px
                box-sizing border-box
              .projectP2
                width 446.98px
                height 40.72px
                padding 0 19.867px
                box-sizing border-box



      .crowdfunding
        .crowdfunding-main
          width 750px
          height 521.58px
          padding 0, 0, 29.8px, 14.9px
          box-sizing border-box
          li
            width 750px
            height 245.39px
            padding 29.8px 14.9px 0, 14.9px
            box-sizing border-box
            display flex
            img
              width 208.59px
              height 215.59px
              margin-right 29.8px
            .crowdfunding-product
              position relative
              width 417.91px
              height 206.13px
              display flex
              flex-direction column
              .crowdfunding-title
                height 39px
              .crowdfunding-price
                height 39px
                margin-top 7.5px
              .progress
                position relative
                height 6px
                width 360px
                msrgin-top 22px
                background-color #7e8c8d
                overflow hidden
                .progressActive
                  position absolute
                  left 0
                  top 0
                  height 6px
                  background-color #F78E00


              .crowdfunding-support
                  position absolute
                  right -20px
                  top 80px
                  width 80px
                  height 39px

              .crowdfunding-supportNum
                height 39px
                margin-top 10px

      .CatagoryModules
        width 750px
        height 781.98px
      .ftWrap
        border-top: 1px solid rgba(0,0,0,.15);
        background-color: #414141;
        .ftContent
          text-align: center;
          padding: .22rem .26667rem .37333rem;
          width: 10rem;
          margin-right: auto;
          margin-left: auto;
          .bd
            .goApp
              margin-right: .66667rem;
              padding 0.23333rem 0.53333rem
              width: 2.29333rem;
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
            .goPc
              width: 2.29333rem;
              padding 0.23333rem 0.53333rem
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
          .copyRight
            margin-top: .48rem;
            font-size: .32rem;
            line-height: .42667rem;
            color: #999;

</style>
<style>
  .swiper-pagination-custom {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: 30px;
    height: 4px;
    display: inline-block;
    background: #000;
    opacity: .3;
    margin: 0 5px;
  }
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background-color: #F78E00;
  }
</style>
