import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class BoardService {
  async getAllBoards() {
    try {
      const res = await api.get('api/board')
      AppState.boards = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const boardService = new BoardService()
