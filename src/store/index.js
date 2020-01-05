import Vue from 'vue'
import Vuex from 'vuex'
import imageUpload from '../store/image_store'

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
    imageUpload
  }
})
