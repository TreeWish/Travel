import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({ // 将 state actions mutations 分开 优化代码
  state,
  actions,
  mutations
})
