
import {
  RECEIVE_RECOMMENDDATA,
  RECEIVE_AUTORECOMMENDDATA,
  RECEIVE_SHAIDANLIST
} from '../mutation-types'

import {
  reqComment,
  reqUpdataPage,
  reqList
} from '../../api'

/*
 包含n个状态数据的对象
 */
const state = {
  recommendData: [],
  autorecommenddata: {
    hasMore: true,
    result:[]
  },
  shaidanList: {
    hasMore: true,
    pagination: {},
    topicList: []
  }

}

const mutations = {
[RECEIVE_RECOMMENDDATA] (state, recommendData) {
state.recommendData = recommendData
},
[RECEIVE_AUTORECOMMENDDATA] (state, autorecommenddata) {
  if (!autorecommenddata.hasMore) {
    //如果没有东西了
    console.log('已加载到底部')
    state.autorecommenddata = autorecommenddata
  } else {
    //还有数据
    state.autorecommenddata.result.push(...autorecommenddata.result)
  }

state.autorecommenddata = autorecommenddata
},
[RECEIVE_SHAIDANLIST] (state, shaidanList) {
  if (!shaidanList.hasMore) {
    //如果没有东西了
    console.log('已加载到底部')
    state.shaidanList = shaidanList
  } else if (shaidanList.hasMore){
    //还有数据
    if (state.shaidanList.type == shaidanList.type ) {
      state.shaidanList.topicList.push(...shaidanList.topicList)
    }else {
        // 不相同, 直接赋值
        state.shaidanList = shaidanList
      }

  }

},
// [RECEIVE_SHAIDANLIST] (state, shaidanList) {
//     if (!state.shaidanList.hasMore) {
//       // 如果tabData还没有数据
//       state.shaidanList = shaidanList
//     } else if (state.shaidanList.hasMore) {
//       // 如果有数据向其中追加
//       // 进一步判断type类型
//       if (state.shaidanList.type === shaidanList.type) {
//         // 如果类型相同再追加, 否则不追加, 避免所有数据都追加在一个数组内
//         state.shaidanList.topicList.push(...shaidanList.topicList)
//       } else {
//         // 不相同, 直接赋值
//         state.shaidanList = shaidanList
//       }
//     }
//   },
}

const actions = {
  //获取推荐数据
  async getRecommendData ({commit}) {

    const result = await reqComment()
    if (result.code == '200') {
      commit(RECEIVE_RECOMMENDDATA, result.data)
    }
  },
  //获取下拉刷新的数据
  async getAutorecommenddata ({commit},{page, size}) {
      const result = await reqUpdataPage({page, size})
      if (result.code = '200') {
        commit (RECEIVE_AUTORECOMMENDDATA, result.data)
      }
  },

  //获取晒单数据
  async getShaiDanList ({commit}, {page, size = 20, type = 1}) {
    const result = await reqList({page, size, type})
    if (result.code = '200') {
      console.log('result', result)
      let shaidanList = result.data
      shaidanList.type = type
      commit (RECEIVE_SHAIDANLIST,result.data)
    }
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
