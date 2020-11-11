import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class ListService {
  async getAllLists() {
    try {
      const res = await api.get('api/list')
      AppState.lists = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async getListById(listId) {
    try {
      const res = await api.get('api/list/' + listId)
      AppState.list = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const listService = new ListService()
