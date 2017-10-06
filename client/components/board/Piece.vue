<template>
  <div>
    {{iconType}}
  </div>
</template>

<script>


export default {
  props:['type'],
  data: function () {
    const TYPE_TO_ICON_MAP = {'K':'K'};
    return {
      get iconType(){
        return TYPE_TO_ICON_MAP[this.type];
      }
    }
  }
}
</script>

<style>


</style>
