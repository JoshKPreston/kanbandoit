<template>
  <!-- <div class="ListComponent col-3 p-3 m-5 bg-secondary rounded"> -->
  <div class="ListComponent col-3 p-3 bg-light card">
    <!-- <input class="list-title" type="text" v-model="state.title" @input="editedTitle()" /> -->
    <div class="row align-items-center p-2 bg-light mb-3">
      <input class="col-10 list-title border-0 bg-info form-control text-light" id="list-title" type="text" v-model="list.title" @change="editList(list)" />
      <div class="col-2 text-center">
        <span @click="deleteList(list)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
        <span @click="createTask(list)">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <TaskComponent v-for="t in tasks" :key="t._id" :task-prop="t" :list-prop="list" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { listService } from '../services/ListService'
import { useRoute } from 'vue-router'
import { taskService } from '../services/TaskService'
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
    const route = useRoute()
    onMounted(() => {
      taskService.getAllTasks(route.params.id, props.listProp._id)
    })
    const state = reactive({
      title: '',
      newTask: {}
    })
    return {
      state,
      // profile: computed(() => AppState.profile),
      list: computed(() => props.listProp),
      tasks: computed(() => AppState.tasks.filter(t => t.listId === props.listProp._id)),
      editList: (list) => {
        listService.editList(route.params.id, list)
      },
      deleteList: (list) => {
        listService.deleteList(route.params.id, list)
      },
      createTask: (list) => {
        state.newTask.boardId = route.params.id
        state.newTask.listId = list._id
        taskService.createTask(state.newTask)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.list-title{
  font-size: 137%;
  text-align: center;
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
