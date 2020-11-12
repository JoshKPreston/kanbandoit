<template>
  <div class="ListComponent col-3 p-3 m-5 bg-secondary rounded">
    <!-- <input class="list-title" type="text" v-model="state.title" @input="editedTitle()" /> -->
    <div class="row p-3">
      <input class="list-title border-0 bg-secondary" type="text" v-model="list.title" @change="editList(list)" />
      <button @click="deleteList(list)" class="btn btn-primary ml-3 mb-2">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { listService } from '../services/ListService'
import { useRoute } from 'vue-router'

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
    const state = reactive({
      title: ''
    })
    return {
      state,
      // profile: computed(() => AppState.profile),
      list: computed(() => props.listProp),
      // openList(list) {
      //   listService.getListById(list._id)
      // },
      editList: (list) => {
        listService.editList(list, route.params.id)
      },
      deleteList: (list) => {
        listService.deleteList(list, route.params.id)
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
