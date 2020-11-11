<template>
  <div class="TaskComponent col-3 m-5 card">
    <h3> {{ task.title }} </h3>
    <h3> {{ task.description }} </h3>
    <h3> {{ task.status }} </h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'TaskComponent',
  props: {
    taskProp: {
      type: Object,
      default: () => {
        alert('this task does not exist')
      }
    }
  },
  setup(props) {
    return {
      task: computed(() => AppState.task)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
