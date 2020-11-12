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

  async getBoardById(boardId) {
    try {
      const res = await api.get('api/board/' + boardId)
      AppState.board = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async createBoard(newBoard) {
    try {
      const res = await api.post('api/board', newBoard)
      AppState.boards = [...AppState.boards, res.data]
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async editBoard(board) {
    try {
      const res = await api.put('api/board/' + board._id, board)
      const index = AppState.boards.findIndex(b => b._id === board._id)
      AppState.boards.splice(index, 1, board)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteBoard(board) {
    try {
      const res = await api.delete('api/board/' + board._id)
      const index = AppState.boards.findIndex(b => b._id === board._id)
      AppState.boards.splice(index, 1)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const boardService = new BoardService()
