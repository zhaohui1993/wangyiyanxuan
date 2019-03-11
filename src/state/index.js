
/*
 vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import catagorys from './modules/catagorys.js'
import home from './modules/home.js'
import shiwu from './modules/shiwu.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    catagorys,
    home,
    shiwu
  }
})


