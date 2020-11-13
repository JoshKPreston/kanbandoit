<template>
  <!-- <transition name="route"> -->
  <div class="home container-fluid">
    <div class="row justify-content-between text-center">
      <BoardComponent v-for="b in boards" :key="b._id" :board-prop="b" />
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>

import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      boardService.getAllBoards()
    })
    return {
      profile: computed(() => AppState.profile),
      boards: computed(() => AppState.boards.filter(b => b.creatorId === AppState.profile._id))
    }
  }
}
</script>

<style scoped lang="scss">
// .home{
//   height: 80vh;
//   // white-space: nowrap;
//   overflow-x: auto;
//   overflow-y: hidden;

//   text-align: center;
//   user-select: none;
//   > img{
//     height: 200px;
//     width: 200px;
//   }
//   //  div {
//   //   display: inline-block;
//   // }
// }

// .home::-webkit-scrollbar {
//   width: 0;
// }
</style>
