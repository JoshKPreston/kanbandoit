<template>
  <div class="TaskComponent row align-items-center p-2 bg-light justify-content-between text-center">
    <input class="col-10 task-title border-0 bg-info form-control text-light" type="text" v-model="task.title" @change="editTask(list, task)" />
    <div class="col-2 text-center">
      <span @click="deleteTask(list, task)">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
      <span @click="createComment(list, task)">
        <i class="fa fa-commenting" aria-hidden="true"></i>
      </span>
    </div>
    <div class="col-12">
      <CommentComponent v-for="c in comments" :key="c._id" :comment-prop="c" :task-prop="task" :list-prop="list" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { taskService } from '../services/TaskService'
import { commentService } from '../services/CommentService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'TaskComponent',
  props: {
    taskProp: {
      type: Object,
      default: () => {
        alert('this task does not exist')
      }
    },
    listProp: {
      type: Object,
      default: () => {
        alert('this task does not exist')
      }
    }
  },
  setup(props) {
    const route = useRoute()
    onMounted(() => {
      commentService.getAllComments(route.params.id, props.listProp._id, props.taskProp._id)
    })
    const state = reactive({
      newComment: {}
    })
    return {
      task: computed(() => props.taskProp),
      list: computed(() => props.listProp),
      comments: computed(() => AppState.comments.filter(c => c.taskId === props.taskProp._id)),
      // comments: computed(() => AppState.comments),

      editTask: (list, task) => {
        taskService.editTask(route.params.id, list, task)
      },
      deleteTask: (list, task) => {
        taskService.deleteTask(route.params.id, list, task)
      },
      createComment: (list, task) => {
        state.newComment.boardId = route.params.id
        state.newComment.listId = list._id
        state.newComment.taskId = task._id
        commentService.createComment(state.newComment)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
