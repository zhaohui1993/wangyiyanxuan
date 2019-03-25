<template>
    <div id="search-wrap" class="clearfix">
      <div class="search">
        <input type="text" :placeholder="placeholder" v-model="searchName" @input="gofFzzy" ref="search" @keyup.enter="goHistory">
        <span class="cancel" @click="cansel">取消</span>
        <div class="searchIcon">
          <i class="iconfont icon-Icon-sousuo"></i>
        </div>
      </div>
      <ul class="list">
        <li v-for="(match, index) in matchList">
          {{match}}
        </li>
      </ul>
      <!--隔板-->
      <Partition/>
      <!--历史记录-->
      <ul class="history">
        <li v-for="(history, index) in historyList" :key="index">{{history}}</li>
      </ul>
      <!--隔板-->
      <Partition/>
      <!--热门搜索-->
      <div class="hotSearch">
        <h3>热门搜索</h3>
        <ul class="hotList">
          <li v-for="(hot, index) in hotList" :key="index">{{hot.keyword}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {reqPlaceHolder, reqMatching} from '../../api/index'
    export default {
        data () {
            return {
              placeholder: '',
              searchName:'',
              matchList:[],
              hotList: [],
              historyList: []
            }
        },
        async mounted () {
            //变化placeholder
            const result = await reqPlaceHolder()
            this.placeholder = result.data.defaultKeyword.keyword
            this.hotList = result.data.defaultKeywords
        },
        methods: {
          gofFzzy () {
              let flag = true
              if (flag) {
                flag = false
                this.time = setTimeout(async () => {
                  //发送请求
                  const result = await reqMatching(this.searchName)
                  console.log('reqMatching', result)
                  this.matchList = result.data
                  flag = true
                },2000)
              }


          },
          cansel () {
//              console.log(this.refs, this)
            this.$refs.search.value=''
          },
          goHistory () {
            this.historyList.unshift(this.searchName)
            if (this.historyList.length>=3) {
              this.historyList = this.historyList.slice(0,3)
            }
          }
        },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search-wrap
    width 100%
    height 1334px
    box-sizing border-box
    background-color #97734d
    padding 0 29.8px
    .search
      position relative
      margin-top 22.35px
      input
        width 552.313px
        padding-left 59.6px
        height 55.625px
        margin-right 5px
        font-size 26px
        color red
      .searchIcon
        position absolute
        left 10px
        top 0
        width 59.6px
        line-height 60px
        height 59.6px
        i
          font-size 30px

      .cancel
        font-size 26px


    .list
      width 100%
      li
        height 50px
        line-height 50px
        background-color white
        border 1px solid #7e8c8d
        width 100%


    .history
      width 100%
      height 72px
      background-color #F78E00
      li
        float left
        height 47px
        background-color white
        border 1px solid #7e8c8d
        line-height 47px
        padding 15px
    .hotSearch
      height 404px
      margin-bottom 20px
      width 750px
      box-sizing border-box
      padding 0 30px
      .hotList
        li
          /*float left*/
          height 47px
          background-color white
          border 1px solid #7e8c8d
          line-height 47px
          padding 15px


</style>
