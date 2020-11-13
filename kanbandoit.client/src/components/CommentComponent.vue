<template>
  <div class="CommentComponent col-12 p-2 text-light">
    <div class="row">
      <input class="col-8 comment-content border-0 bg-secondary form-control text-light" type="text" v-model="comment.content" @change="editComment(list, task, comment)" />
      <span class="col-1" @click="deleteComment(list, task, comment)">
        <i class="fa fa-times" aria-hidden="true"></i>
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
