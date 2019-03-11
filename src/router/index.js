/**
 * Created by Administrator on 2019/3/8.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default  new VueRouter({
  mode:'history',
  routes
})
