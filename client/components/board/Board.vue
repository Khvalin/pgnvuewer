<template>
  <div class="board-wrapper">
    <div class="board">
    <div class="b-row" v-for="i in [8,7,6,5,4,3,2,1]" :key="i">
      <Square :id="`${i}${j}`" :color="(i%2 === j%2)?'dark':'light'" v-for="j in 8" :key="j" />
    </div>
    </div>
  </div>
</template>

<script>
import Square from 'components/board/Square'

export default {
  components: {
    Square
  }
}
</script>

<style>
.board{ 
  --dark-sq-color: black;
  --light-sq-color: white;
  --square-size: 1.2em;

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
