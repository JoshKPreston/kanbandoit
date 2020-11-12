<template>
  <div class="CreateBoardComponent">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-light"
      data-toggle="modal"
      data-target="#createBoard"
    >
      <i class="fa fa-th-large" aria-hidden="true"></i>
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="createBoard"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form class="form-group" @submit.prevent="createBoard()">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Create a board...
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="text" v-model="state.newBoard.title" placeholder="Board title...">
              <textarea
                class="form-control rounded-0 mt-3"
                rows="15"
                name=""
                id=""
                aria-describedby="Body"
                v-model="state.newBoard.description"
                placeholder="Board description..."
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Create!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { boardService } from '../services/BoardService'

export default {
  name: 'CreateBoard',
  setup() {
    const state = reactive({
      newBoard: {}
    })
    return {
      state,
      createBoard() {
        boardService.createBoard(state.newBoard)
        state.newBoard = {}
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped></style>
