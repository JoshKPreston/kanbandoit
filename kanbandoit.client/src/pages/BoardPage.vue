<template>
  <div class="BoardPage container-fluid">
    <ListComponent v-for="t in lists" :key="t._id" list-prop="t" />
    this is the board page
  </div>
</template>

<script>

import { computed } from 'vue'
import { AppState } from '../AppState'
import ListComponent from '../components/ListComponent'

export default {
  name: 'BoardPage',
  setup() {
    return {
      board: computed(() => AppState.board)
    }
  },
  components: { ListComponent }
}
</script>

<style lang="scss" scoped>

</style>
