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
    const newState = !state.highlightedSquares[id]
    Vue.set(state.highlightedSquares, id, newState)
  },

  unselectSquare(id) {
    if (id in state.highlightedSquares) {
      Vue.set(state.highlightedSquares, id, false)
    }
  },

  selectSquare(state, id) {
    if (!chessDriver.gameOver) {
      let selected = !state.highlightedSquares[id]

      const moves = chessDriver.getMoves(id)

      Vue.set(state.highlightedSquares, state.newMove.from, false)

      if (moves.length) {
        state.newMove.from = id
        state.newMove.availableMoves = moves.map((m) => m.to)

        Vue.set(state.highlightedSquares, id, selected)
      } else {
        const to = state.newMove.availableMoves.find((m) => m === id)
        if (to) {
          chessDriver.makeMove({ to, from: state.newMove.from })
          actions.updatePositionFromChessDriver()
        }
      }
    }
  }
}

const state = {
  position: [],
  newMove: { from: null, availableMoves: [] },

  highlightedSquares: {}
}

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  resetSelection() {
    state.availableMoves = []
    state.newMove = { from: null, availableMoves: [] }
    state.highlightedSquares = {}
  },

  updatePositionFromChessDriver() {
    this.resetSelection()
    state.position = getPositionFromChessDriver()
  }
}

actions.updatePositionFromChessDriver()

const boardStore = {
  state,
  mutations,
  actions
}

export default boardStore
