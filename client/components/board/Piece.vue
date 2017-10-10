<template>
  <div class="chess-piece" >
    <svgicon width="100%" height="100%" class="piece" :class="color" :icon="iconName"></svgicon>

  </div>
</template>

<script>
import 'components/compiled-icons/'

export default {
  props:['type', 'color'],
  data: function () {
    const self = this;

    return {
      get iconName(){
        const color = 'b';
        return 'regular/' + color +  self.type;
      }
    }
  }
}
</script>

<style>

.chess-piece .piece.b{
  fill: #000;
  stroke: #FFF;
}
.chess-piece .piece.w{
  fill: #FFF;
  stroke: #000;
}

</style>
