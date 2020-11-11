<template>
  <div class="TaskPage container-fluid">
    <CommentComponent v-for="c in comments" :key="c._id" list-prop="c" />
    this is the task page
  </div>
</template>

<script>

import { computed } from 'vue'
import { AppState } from '../AppState'
import CommentComponent from '../components/CommentComponent'

export default {
  name: 'TaskPage',
  setup() {
    return {
      task: computed(() => AppState.task)
    }
  },
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped>

</style>
