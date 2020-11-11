<template>
  <div class="BoardComponent col-3 m-5">
    <h1>
      {{ board.title }}
    </h1>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'BoardComponent',
  props: {
    boardProp: {
      type: Object,
      default: () => {
        alert('this board does not exist')
      }
    }
  },
  setup(props) {
    return {
      board: computed(() => props.boardProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
