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
    const TYPE_TO_ICON_MAP = {K:'k', Q:'q'};
    return {
      get iconName(){
        const color = self.color === 'black'? 'b': 'w';
        return 'regular/'+color + ( TYPE_TO_ICON_MAP[self.type] || self.type);
      }
    }
  }
}
</script>

<style>

.chess-piece .piece.black{
  fill: #000;
  stroke: #FFF;
}
.chess-piece .piece.white{
  fill: #FFF;
  stroke: #000;
}


</style>
