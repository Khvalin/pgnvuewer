import Vue from 'vue'
import Vuex from 'vuex'

import chessDriver from '../drivers/chessDriver'

Vue.use(Vuex)

const mutations = {
  getPositionFromChessDriver: function() {
    return chessDriver.board()
  },
  setPiece: function(coord, pieceData) {
    //
  }
}

const state = {
  position: mutations.getPositionFromChessDriver()
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
