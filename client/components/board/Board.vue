<template>
  <div class="board-wrapper">
    <div class="board">
    <div class="b-row" v-for="i in [8,7,6,5,4,3,2,1]" :key="i">
      <Square v-for="j in 8" :key="j"
        :ref="getSquareRefValue(i, j)"
        :piece="$store.state.board.position[getSquareRefValue(i, j)]"
        :id="getSquareRefValue(i, j)"
        :color="(i%2 === j%2)?'dark':'light'"
      />
    </div>
    </div>
  </div>
</template>

<script>
import Square from 'components/board/Square'
import Piece from 'components/board/Piece'
import constants from '../../constants'

let output = null;

export default (output = {
  components: {
    Square
  },
  methods: {
    setPiece: function(coord, pieceData){
      
    },
    toAlgebraicNotation: function(rowIndex, columnIndex){
      return `${constants.ABC[columnIndex - 1]}${rowIndex}`;
    },

    getSquareRefValue: function(rowIndex, columnIndex) {
      return output.methods.toAlgebraicNotation(rowIndex, columnIndex);
    }
  },
  data: function() {
    return {

    }
  },
  mounted(){
    //output.setPiece('A1', {type: 'K'});
  }
})
</script>

<style>
.board{ 
  width: calc(8 * var(--square-size) ); 
  height: calc(8 * var(--square-size) ); 

  border: 1px solid var(--dark-sq-color);
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-row: 8/1;
 /* grid-template-columns: repeat(8, 1fr);*/
 /* grid-template-rows: repeat(8, 1fr);*/
}


.b-row {
	display: inline-grid;
	grid-column: 1/span 8;
}


</style>
