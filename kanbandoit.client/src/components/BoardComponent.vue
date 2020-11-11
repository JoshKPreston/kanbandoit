<template>
  <div class="BoardComponent col-3 m-5 card">
    <h1> {{ board.boardTitle }} </h1>
    <h3> {{ board.boardDescription }} </h3>
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
