import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  appName: '' // 当前位置纬度
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
