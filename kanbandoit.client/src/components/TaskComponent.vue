<template>
  <div class="TaskComponent row">
    <input class="col-9 task-title border-0 bg-secondary" type="text" v-model="task.title" @change="editTask(task, list)" />
    <span @click="deleteTask(task, list)">&times;</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { taskService } from '../services/TaskService'
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
    return {
      task: computed(() => props.taskProp),
      list: computed(() => props.listProp),
      editTask: (task, list) => {
        taskService.editTask(task, route.params.id, list)
      },
      deleteTask: (task, list) => {
        taskService.deleteTask(task, route.params.id, list)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
