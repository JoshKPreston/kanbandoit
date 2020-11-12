<template>
  <CreateListComponent />
  <div class="BoardPage container-fluid">
    <ListComponent v-for="l in lists" :key="l._id" :list-prop="l" />
  </div>
</template>

<script>

import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
// import CreateListComponent from '../components/CreateListComponent'
// import ListComponent from '../components/ListComponent'
import { listService } from '../services/ListService'
import { useRoute } from 'vue-router'

export default {
  name: 'BoardPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      listService.getAllLists(route.params.id)
    })
    const state = reactive({
      newList: {}
    })
    return {
      state,
      board: computed(() => AppState.board),
      lists: computed(() => AppState.lists)
    }
  }
  // components: { ListComponent }
}
</script>

<style lang="scss" scoped>

</style>
