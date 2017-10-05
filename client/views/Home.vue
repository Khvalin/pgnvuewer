<template>
  <div class="page">
    <board></board>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import Board from 'components/Board'

export default {
  components: {
    Board,
    Counter
  }
}
</script>
