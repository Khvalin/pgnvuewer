import Chess from 'chess.js'
import constants from '../constants'

let _chess = null

class ChessDriver {
  constructor() {
    _chess = new Chess()
  }

  board() {
    const board = _chess.board()
    var result = {}
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        result[constants.ABC[j] + (8 - i).toString()] = board[i][j]
      }
    }
    return result
  }
}

export default new ChessDriver()
