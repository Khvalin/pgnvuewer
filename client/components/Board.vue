<template>
  <div class="board-wrapper">
    <div class="board">
    <div class="b-row" v-for="i in 8">
      <div class="b-sq" v-for="j in 8">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

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
 /* grid-template-columns: repeat(8, 1fr);*/
 /* grid-template-rows: repeat(8, 1fr);*/
}


.b-row {
	display: inline-grid;
	grid-column: 1/span 8;
}

.b-sq {
  background-color: var(--dark-sq-color);
	grid-row: 1/span 1;
  height: var(--square-size);
  width: var(--square-size);
}


.b-row:nth-of-type(2n) .b-sq:nth-of-type(2n) {
		background-color: var(--light-sq-color);
}


.b-row:nth-of-type(2n+1)	.b-sq:nth-of-type(2n+1) {
		background-color: var(--light-sq-color);;
}

</style>
