import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: { d1: { type: 'Q', color: 'white' }, e8: { type: 'K', color: 'black' }, e1: { type: 'K', color: 'white' } }
}

const mutations = {
  setPiece: function(coord, pieceData) {
    //
  }
}

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
