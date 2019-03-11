<template>
    <div>
      <ul class="catagorysList">
        <li v-for="(catagroy, index) in catagoryList.subCateList" :key="index">
          <img v-lazy="catagroy.bannerUrl" alt="">
          <p>{{catagroy.name}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
//  import Bscroll from 'better-scroll'
    export default {
        props: {
          catagoryList: Object
        },
        data () {
            return {}
        },


        computed: {
//          ...mapState({
//            catagorysList: state => state.catagorys.catagorysList
//          })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .catagorysList
    display flex
    flex-wrap wrap
    li
      width 144px
      height 216px
      display flex
      flex-direction column
      align-items center
      margin-right 31.750px
      img
        width 144px
        height 144px
      p
        font-size 24px
</style>
