<template>
  <div class="ListComponent col-3 m-5 card">
    <h3> {{ list.title }} </h3>
    <h3> {{ list.description }} </h3>
    <h3> {{ list.status }} </h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ListComponent',
  props: {
    listProp: {
      type: Object,
      default: () => {
        alert('this list does not exist')
      }
    }
  },
  setup(props) {
    return {
      list: computed(() => AppState.list)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
