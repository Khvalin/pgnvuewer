<template>
  <div class='b-sq' :class="color">
    {{ id }}
  </div>
</template>

<script>


export default {
  props:['color', 'id'],
  data: function () {
    return {

    }
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
