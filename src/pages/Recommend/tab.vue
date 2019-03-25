<template>
    <div id="wrap">
      <div class="top-tip">
        <span class="refresh-hook">下拉刷新</span>
      </div>
      <ul v-if="$route.params.id == 0" v-for="(recommend, index) in recommendData" :key="index" class="list-content list-content-hook">
        <li v-for="(topic, index) in recommend.topics" :key="`${index}1`">
          <XuanMei v-if="topic.style === 1" :topic="topic"/>
          <GroupItem v-if="topic.style === 2" :topic="topic"/>
          <!--隔板-->
          <Partition/>
        </li>
      </ul>
      <ul v-for="(autorecommend, index) in autorecommenddata.result" :key="index+'jiazai'" class="list-content list-content-hook">
        <li v-for="(topic, index) in autorecommend.topics" :key="index+'info'">
          <XuanMei v-if="topic.style === 1" :topic="topic"/>
          <GroupItem v-if="topic.style === 2" :topic="topic"/>
          <UpdatwGoods v-if="topic.style === 3" :topic="topic"/>
          <photoWall v-if="topic.style === 4" :topic="topic"/>
          <!--隔板-->
          <Partition/>
        </li>
      </ul>

      <!--晒单-->
      <div class="showContent-wrapper" v-if="$route.params.id == 3">
        <h1>快乐生活</h1>
        <div class="one" :class="{active: type === 1}" @click="changeType(1)">最新</div>
        <div class="two" :class="{active: type === 2}" @click="changeType(2)">本月最热</div>
        <div class="three" :class="{active: type === 3}" @click="changeType(3)">晒单合集</div>
        <ul class="shaidan">
          <li v-for="(topic, index) in shaidanList.topicList" :key="index">
            <BuyerShow :topic="topic" :index="index"/>
          </li>
        </ul>
      </div>


      <div class="bottom-tip">
        <span class="loading-hook">查看更多</span>
      </div>
      <!-- alert -->
      <div class="alert alert-hook">刷新成功</div>

    </div>
</template>

<script>
  import {mapState} from 'vuex'

  import XuanMei from '../../components/xuanmeiStyle/xuanmeiStyle.vue'
  import GroupItem from '../../components/GroupItem/GroupItem.vue'
  import UpdatwGoods from '../../components/UpdatwGoods/UpdatwGoods.vue'
  import photoWall from '../../components/photoWall/photoWall.vue'
  import BuyerShow from '../../components/BuyerShow/BuyerShow.vue'
    export default {
        data () {
            return {
              type: 1
            }
        },
        components: {
          XuanMei,
          GroupItem,
          UpdatwGoods,
          photoWall,
          BuyerShow
        },
        computed: {
          ...mapState({
            recommendData: state => state.shiwu.recommendData
          }),
          ...mapState({
            autorecommenddata: state => state.shiwu.autorecommenddata
          }),
          ...mapState({
            shaidanList: state => state.shiwu.shaidanList
          })
        },
        methods: {
          changeType (type) {
              console.log(1111)
              this.type = type
          }
        },
        mounted () {
            this.$store.dispatch('getShaiDanList',{page:1, size: 20, type: 1})
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /* 下拉、上拉提示信息 */

  .top-tip{
    position: absolute;
    top: -80px;
    color white
    font-weight bold
    left: 0;
    z-index: 1;
    width: 100%;
    height:80px;
    line-height:80px;
    text-align:center;
    background-color: #555;
  }

  .bottom-tip{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #777;
    background-color: #f2f2f2;
  }
  /* 全局提示信息 */
  .alert{
    display: none;
    position: fixed;
    top: 55px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 36px;
    background: rgba(7, 17, 27, 0.7);
  }
  /*晒单*/
  .showContent-wrapper
    .one,.two,.three
      width 170px
      height 60px
      border 2px solid red
      &.active
        background-color #7e8c8d
    .shaidan
      //瀑布流布局
      column-count: 2;
      column-gap: 14.9px;

</style>
