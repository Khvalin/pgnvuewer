<template>
  <div class='b-sq' v-on:click="onSelect" :class="[color, {highlight: isHighlighted}]">
    <Piece v-if="hasPiece" v-bind="piece" />
  </div>
</template>

<script>
  import Piece from 'components/board/Piece'
  
  import {
    mapMutations
  } from 'vuex'
  
  export default {
    props: ['color', 'id', 'piece'],
    computed: {
      hasPiece: function() {
        return this.piece != null
      },
      isHighlighted: function(){
        const highlighted = this.$store.state.board.highlightedSquares

        return ( highlighted[this.id])
      }
    },
    data: function() {
      return {
  
      }
    },
    methods: {

      onSelect: function(e) {
        this.$store.commit('highlightSquare', this.id)
        
      },
      ...mapMutations(['highlightSquare'])
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

  .b-sq.highlight{
    border: 2px inset black ;
  }
</style>
