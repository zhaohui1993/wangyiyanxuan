<template>
    <div>
      <router-view></router-view>
      <Footer v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>

  import Footer from './components/Footer/Footer.vue'
    export default {
        data () {
            return {}
        },
        components: {
          Footer,
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
