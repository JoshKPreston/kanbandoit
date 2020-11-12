<template>
  <div class="CreateListComponent">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-light"
      data-toggle="modal"
      data-target="#createList"
    >
      <i class="fas fa-scroll"></i>
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="createList"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form class="form-group" @submit.prevent="createList()">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Create a list...
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
              <input type="text" v-model="state.newList.title" placeholder="List title...">
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
import { computed, reactive } from 'vue'
import { listService } from '../services/ListService'
import { AppState } from '../AppState'

export default {
  name: 'CreateList',
  setup() {
    const state = reactive({
      newList: {}
    })
    return {
      state,
      board: computed(() => AppState.board),
      createList(board) {
        state.newList.boardId = board._id
        listService.createList(state.newList)
        state.newList = {}
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped></style>
