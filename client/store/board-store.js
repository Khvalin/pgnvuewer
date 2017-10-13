import Vue from 'vue'
import Vuex from 'vuex'

import chessDriver from '../drivers/chessDriver'

const mutations = {
  getPositionFromChessDriver: function() {
    return chessDriver.board()
  },
  setPiece: function(coord, pieceData) {
    //
  },

  setSelectedSquare(el, id) {
    console.log(id)
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

const boardStore = {
  state,
  mutations,
  actions
}

export default boardStore
