<template>
  <div class="BoardPage container-fluid">
    <CreateListComponent />
    <div class="row justify-content-around text-center">
      <ListComponent v-for="l in lists" :key="l._id" :list-prop="l" />
    </div>
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
      lists: computed(() => AppState.lists.filter(l => l.boardId === route.params.id))
    }
  }
  // components: { ListComponent }
}
</script>

<style lang="scss" scoped>

</style>
