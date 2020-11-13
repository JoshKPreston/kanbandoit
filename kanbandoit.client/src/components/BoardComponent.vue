<template>
  <div class="BoardComponent col-4 p-3 m-3 bg-secondary card">
    <!-- <input class="board-title" type="text" v-model="state.title" @input="editedTitle()" /> -->
    <div class="row align-items-center p-2 bg-primary">
      <input class="col-8 board-title border-0 bg-secondary form-control text-light" type="text" v-model="board.title" @change="editBoard(board)" />
      <textarea class="board-description border-0 bg-secondary" rows="5" v-model="board.description" @change="editBoard(board)"></textarea>
      <div class="col-2 text-center">
        <span @click="openBoard(board)">
          <i class="fa fa-share" aria-hidden="true"></i>
        </span>
        <span @click="deleteBoard(board)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { boardService } from '../services/BoardService'
import router from '../router'
// import { useRouter } from 'vue-router'

export default {
  name: 'BoardComponent',
  props: {
    boardProp: {
      type: Object,
      default: () => {
        alert('this board does not exist')
      }
    }
  },
  setup(props) {
    // const router = useRouter()
    // onMounted((board) => {
    //   state.title = board.title
    // })
    // const state = reactive({
    //   title: ''
    // })
    return {
      // state,
      // profile: computed(() => AppState.profile),
      board: computed(() => props.boardProp),
      openBoard(board) {
        // boardService.getBoardById(board._id)
        router.push({ name: 'Board', params: { id: board._id } })
      },
      editBoard: (board) => {
        boardService.editBoard(board)
      },
      deleteBoard: (board) => {
        boardService.deleteBoard(board)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.board-description{
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>

// "description": "aerhaetraetj",
// "_id": "5fac3fd1f1d8715434c595a2",
// "title": "someNewTitle",
// "creatorId": "13d64a3f-2dec-40c9-9653-19bb5699ea41",
// "createdAt": "2020-11-11T19:47:29.276Z",
// "updatedAt": "2020-11-11T22:11:52.581Z",
// "__v": 0,
// "id": "5fac3fd1f1d8715434c595a2"
