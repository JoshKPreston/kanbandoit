import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class ListService {
  async getAllLists(boardId) {
    try {
      const res = await api.get('api/board/' + boardId + '/lists')
      AppState.lists = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async getListById(boardId, listId) {
    try {
      const res = await api.get('api/board/' + boardId + '/lists/' + listId)
      AppState.list = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async createList(boardId, newList) {
    try {
      const res = await api.post('api/board/' + boardId + '/lists', newList)
      AppState.lists = [...AppState.lists, res.data]
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async editList(boardId, list) {
    try {
      const res = await api.put('api/board/' + boardId + '/lists/' + list._id, list)
      const index = AppState.lists.findIndex(l => l._id === list._id)
      AppState.lists.splice(index, 1, list)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteList(boardId, list) {
    try {
      const res = await api.delete('api/board/' + boardId + '/lists/' + list._id)
      const index = AppState.lists.findIndex(l => l._id === list._id)
      AppState.lists.splice(index, 1)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const listService = new ListService()
