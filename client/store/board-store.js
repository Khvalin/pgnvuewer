import Vue from 'vue'
import Vuex from 'vuex'

import chessDriver from '../drivers/chessDriver'

const getPositionFromChessDriver = function() {
  return chessDriver.board()
}

const mutations = {
  setPiece: function(coord, pieceData) {
    //
  },

  highlightSquare(state, id) {
    const newState = !!!state.highlightedSquares[id]
    Vue.set(state.highlightedSquares, id, newState)
  }
}

const state = {
  position: getPositionFromChessDriver(),
  highlightedSquares: {}
}

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const boardStore = {
  state,
  mutations,
  actions
}

export default boardStore
