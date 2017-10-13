import Vue from 'vue'
import Vuex from 'vuex'
import board from './board-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    board: board
  }
})

export default store
