<template>
  <div class="CommentComponent row align-items-center p-2 text-light">
    <input class="col-8 task-title border-0 bg-secondary form-control text-light" type="text" v-model="comment.content" @change="editComment(task, comment)" />

    <span class="col-1" @click="deleteComment(task, comment)">
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'CommentComponent',
  props: {
    taskProp: {
      type: Object,
      default: () => {
        alert('this list does not exist')
      }
    },
    commentProp: {
      type: Object,
      default: () => {
        alert('this comment does not exist')
      }
    }
  },
  setup(props) {
    return {
      task: computed(() => props.taskProp),
      comment: computed(() => props.commentProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
