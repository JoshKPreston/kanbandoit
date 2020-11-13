<template>
  <div class="CommentComponent row align-items-center p-2 bg-primary rounded justify-content-between text-center">
    <input class="col-10 comment-content border-0 bg-info form-control text-light" type="text" v-model="comment.content" @change="editComment(list, task, comment)" />
    <div class="col-2">
      <span @click="deleteComment(list, task, comment)">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { commentService } from '../services/CommentService'
import { useRoute } from 'vue-router'
export default {
  name: 'CommentComponent',
  props: {
    listProp: {
      type: Object,
      default: () => {
        alert('this list does not exist')
      }
    },
    taskProp: {
      type: Object,
      default: () => {
        alert('this task does not exist')
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
    const route = useRoute()
    return {
      list: computed(() => props.listProp),
      task: computed(() => props.taskProp),
      comment: computed(() => props.commentProp),

      editComment: (list, task, comment) => {
        commentService.editComment(route.params.id, list, task, comment)
      },
      deleteComment: (list, task, comment) => {
        commentService.deleteComment(route.params.id, list, task, comment)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
