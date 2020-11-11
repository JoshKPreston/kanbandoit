<template>
  <div class="BoardComponent col-3 m-5 card">
    <!-- <input class="board-title" type="text" v-model="state.title" @input="editedTitle()" /> -->
    <input class="board-title border-0" type="text" v-model="board.title" @change="editBoard(board)" />
    <textarea class="board-description" type="text" v-model="board.description" @change="editBoard(board)" />
    <button @click="openBoard(board._id)">
      Open
    </button>
    <button @click="deleteBoard(board._id)">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { boardService } from '../services/BoardService'
import router from '../router'

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
    // onMounted((board) => {
    //   state.title = board.title
    // })
    const state = reactive({
      title: ''
    })
    return {
      state,
      board: computed(() => props.boardProp),
      openBoard(boardId) {
        boardService.getBoardById(boardId)
        router.push({ name: 'Board', params: { id: boardId } })
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

</style>

// "description": "aerhaetraetj",
// "_id": "5fac3fd1f1d8715434c595a2",
// "title": "someNewTitle",
// "creatorId": "13d64a3f-2dec-40c9-9653-19bb5699ea41",
// "createdAt": "2020-11-11T19:47:29.276Z",
// "updatedAt": "2020-11-11T22:11:52.581Z",
// "__v": 0,
// "id": "5fac3fd1f1d8715434c595a2"
