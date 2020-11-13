<template>
  <div class="CreateListComponent p-3">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#createList"
    >
      <i class="fa fa-th-list" aria-hidden="true"></i>
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="createList"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form class="form-group" @submit.prevent="createList()">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitle">
                Create a list...
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
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
import { useRoute } from 'vue-router'
export default {
  name: 'CreateListComponent',
  setup() {
    const route = useRoute()
    const state = reactive({
      newList: {}
    })
    return {
      state,
      board: computed(() => AppState.board),
      createList() {
        state.newList.boardId = route.params.id
        listService.createList(state.newList)
        state.newList = {}
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
