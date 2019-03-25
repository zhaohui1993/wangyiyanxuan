<template>
    <div id="app">
      <div class="header">
        <div class="blackMove" ref="disappear" v-show="isDisappear">
          ×
        </div>
        <div class="top-bar">
          <div class="top-bar-left">
            <i class="iconfont icon-shouye"></i>
          </div>
          <div class="top-bar-middle">
            <span class="active">发现</span>
            <span>甄选之家</span>
          </div>
          <div class="top-bar-right">
            <i class="iconfont icon-gouwuche1"></i>
            <i class="iconfont icon-Icon-sousuo"></i>
          </div>
        </div>
        <ul class="nav">
          <!--:to=`/recommend/tab/${index}`-->
            <li v-for="(nav, index) in navList" :key="index"  :class="{active:index == $route.params.id}" @click="$route.params.id = index">
              <router-link :to="`/recommend/tab/${index}`">
                <span>{{nav.tabName}}</span>
              </router-link>
            </li>
        </ul>
      </div>
      <div class="contener-wrap">
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {reqNavList, reqComment} from '../../api/index'

    export default {
        data () {
            return {
                navList: [],
//                Index: 0,
                isDisappear: true,
                autoGetDataNum: 1
            }
        },
        async mounted () {
            const topTip = document.querySelector('.refresh-hook')
            this.topTip = topTip
            const alert = document.querySelector('.alert-hook')
            this.alert = alert
            const bottomTip = document.querySelector('.loading-hook');
            this.bottomTip = bottomTip
            const listContent = document.querySelector('.list-content-hook')
            console.log('listContent', listContent)
            this.listContent = listContent
//          this.topTip = document.querySelector('.refresh-hook')
//          console.log('11111',topTip.innerHTML)
//          this.alert = document.querySelector('.alert-hook'),
          this.$store.dispatch('getRecommendData')
//          this.$store.dispatch('getAutorecommenddata',{page: 1, size: 5})
         const result = await reqNavList()
         if (result.code == '200') {
           this.navList = result.data
         }
         //监听滚动事件
          document.addEventListener('scroll', () => {
            this.isDisappear = false
          })

         const scroll = new Bscroll('.contener-wrap',{
            click:true,
            probeType: 1,
           pullUpLoad: {
             threshold: -80 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
           },
          })
          scroll.on('scroll', (position) => {
              //上面消失
            this.isDisappear = false

            if(position.y > 80) {
              this.topTip.innerText = '释放立即刷新';
            }
          })
          //滑动结束
//          scroll.on('touchEnd', (position) => {
//              const index = this.autoGetDataNum++
//            if (position.y>80) {
//                setTimeout(() => {
//                  /*
//                   * 这里发送ajax刷新数据
//                   * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
//                   */
//                  this.topTip.innerHTML='下拉刷新'
//                  // 刷新成功后的提示
//                  this._refreshAlert('刷新成功');
//                  // 刷新列表后,重新计算滚动区域高度
//                  scroll.refresh();
//                },1000)
//            } else if (position.y < (scroll.maxScrollY - 80)) {
//                this.bottomTip.innerText = '加载中...';
////                this.$store.dispatch('getAutorecommenddata', {page: index, size: 5})
////                scroll.finishPullUp()
////                scroll.refresh()
//              setTimeout( () => {
//                // 恢复文本值
//                this.bottomTip.innerText = '查看更多';
//              }, 1000);
//            }
//          })
          scroll.on('pullingUp', async() => {

            const index = this.autoGetDataNum++

            this.bottomTip.innerText = '加载中';
           if (this.$route.params.id == 0) {
             await this.$store.dispatch('getAutorecommenddata', {page: index, size: 5})
           } else {
             console.log('上拉加载数据', index);
             await this.$store.dispatch('getShaiDanList', {page: index, size: 20, type: 1})
           }
            this.bottomTip.innerText = '查看更多';

            scroll.finishPullUp()//当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
          })
          scroll.refresh();

        },
        methods: {
//          goDetail (index) {
//            this.Index = index
//          },

          //下拉刷新
          _refreshAlert(text) {
            text = text || '操作成功';
            this.alert.innerHtml = text;
            this.alert.style.display = 'block';
            setTimeout(() => {
              this.alert.style.display = 'none';
            }, 1000);
          },

        }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  width 750px
  .blackMove
    width 100%
    height 51px
    background-color #7e8c8d
  .top-bar
    width 100%
    background-color blue
    padding 15.893px 29.8px
    box-sizing border-box
    height 74px
    display flex
    justify-content space-between
    .top-bar-left
      i
        font-size 30px
    .top-bar-middle
      span
        font-weight bold
        &.active
          color red
          font-size 30px
    .top-bar-right
      i
        font-size 30px
  .nav
    height 74.5px
    line-height 74.5px
    width 100%
    display flex
    justify-content space-between
    li
      padding 0 4px
      height 74.5
      border-bottom 2px solid white
      &.active
        border-bottom 2px solid red




.contener-wrap
  width 750px
  height 1100px
  overflow hidden
</style>
<style>

</style>
