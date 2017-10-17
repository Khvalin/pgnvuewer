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
      if (selected) {
        const moves = chessDriver.getMoves(id)

        if (moves.length) {
          mutations.unselectSquare(state.startSquare)
          state.startSquare = id
          state.availableMoves = moves
          selected = true
        } else {
          const newMove = state.availableMoves.find((m) => id === m.to)
          if (newMove && chessDriver.makeMove(newMove)) {
            actions.updatePositionFromChessDriver()
          }
        }
      }
      Vue.set(state.highlightedSquares, id, selected)
    }
  }
}

const state = {
  position: [],
  startSquare: null,
  availableMoves: [],
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
    state.startSquare = null
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
