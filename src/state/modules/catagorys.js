
import {
  RECEIVE_CATAGORYSLIST
} from '../mutation-types'

import {
  reqCatagorys,

} from '../../api'

/*
 包含n个状态数据的对象
 */
const state = {
  catagorysList : {}
}

const mutations = {
  [RECEIVE_CATAGORYSLIST] (state, catagorysList) {
    state.catagorysList = catagorysList
  }
}

const actions = {
  async getCatagorysList ({commit}) {
    const result = await reqCatagorys()
    commit (RECEIVE_CATAGORYSLIST, result.data)
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters,
}
