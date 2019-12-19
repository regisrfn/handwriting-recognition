import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rotateClass: false
  },
  mutations: {
    SET_CLASS(state, isValid){
      state.rotateClass = isValid 
    }
  },
  actions: {
  },
  modules: {
  }
})
