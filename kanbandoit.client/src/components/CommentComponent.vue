<template>
  <div class="CommentComponent col-3 m-5 card">
    <h3> {{ comment.title }} </h3>
    <h3> {{ comment.description }} </h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'CommentComponent',
  props: {
    commentProp: {
      type: Object,
      default: () => {
        alert('this comment does not exist')
      }
    }
  },
  setup(props) {
    return {
      comment: computed(() => AppState.comment)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
