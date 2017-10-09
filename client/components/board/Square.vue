<template>
  <div class='b-sq' :class="color">
    <Piece v-if="hasPiece" v-bind="piece" />
  </div>
</template>

<script>

import Piece from 'components/board/Piece'

export default {
  props:['color', 'id', 'piece'],
  computed: {
    hasPiece: function() {
      return this.piece != null
    }
  },
  data: function () {
    return {

    }
  },
  components: {
    Piece
  }
}
</script>

<style>

.b-sq {
  background-color: var(--dark-sq-color);
	grid-row: 1/span 1;
  height: var(--square-size);
  width: var(--square-size);
}


.b-sq.light {
		background-color: var(--light-sq-color);
}

</style>
