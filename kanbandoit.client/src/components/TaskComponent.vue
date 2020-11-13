<template>
  <div class="TaskComponent row align-items-center p-2 text-light">
    <span class="col-2" @click="createComment(task, list)">
      <i class="fa fa-commenting" aria-hidden="true"></i>
    </span>
    <input class="col-8 task-title border-0 bg-secondary form-control text-light" type="text" v-model="task.title" @change="editTask(list, task)" />
    <span class="col-1" @click="deleteTask(task, list)">
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>
    <div>
      <CommentComponent v-for="c in comments" :key="c._id" :comment-prop="c" :task-prop="task" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { taskService } from '../services/TaskService'
import { commentService } from '../services/CommentService'
import { useRoute } from 'vue-router'
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
    const state = reactive({
      newComment: {}
    })
    return {
      task: computed(() => props.taskProp),
      list: computed(() => props.listProp),
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
        commentService.createComment(state.newTask)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  span, input {
    cursor: pointer;
  }
</style>
