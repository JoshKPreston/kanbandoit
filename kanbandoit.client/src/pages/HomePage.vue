<template>
  <div class="home container-fluid">
    <div class="row">
      <BoardComponent v-for="b in boards" :key="b._id" :board-prop="b" />
    </div>
  </div>
</template>

<script>

import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import BoardComponent from '../components/BoardComponent'
import { boardService } from '../services/BoardService'

export default {
  name: 'Home',
  components: { BoardComponent },
  setup() {
    onMounted(() => {
      boardService.getAllBoards()
    })
    return {
      profile: computed(() => AppState.profile),
      boards: computed(() => AppState.boards)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
