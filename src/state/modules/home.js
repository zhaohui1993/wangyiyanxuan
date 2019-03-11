
import {
  RECEIVE_HOMELIST
} from '../mutation-types'

import {
  reqHomeShowNav
} from '../../api'

/*
 包含n个状态数据的对象
 */
const state = {
  homeList:{}
}

const mutations = {
  [RECEIVE_HOMELIST] (state, homeList) {
  state.homeList = homeList
}
}

const actions = {
  // 异步获取homeList
  async getHomeList({commit}) {
    const result = await reqHomeShowNav()
    if (result.code === 0) {
      const homeList = result.data
      commit(RECEIVE_HOMELIST, homeList)
    }
  },
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters,
}
