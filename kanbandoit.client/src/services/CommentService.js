import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class CommentService {
  async getAllComments(boardId, listId, taskId) {
    try {
      const res = await api.get('api/board/' + boardId + '/lists/' + listId + '/tasks/' + taskId + '/comments')
      AppState.tasks = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  // async getCommentById(boardId, taskId) {
  //   try {
  //     const res = await api.get('api/board/' + boardId + '/tasks/' + taskId)
  //     AppState.task = res.data
  //     logger.log(res.data)
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }

  async createComment(newComment) {
    try {
      const res = await api.post('api/board/' + newComment.boardId + '/lists/' + newComment.listId + '/tasks/' + newComment.taskId + '/comments', newComment)
      AppState.tasks = [...AppState.tasks, res.data]
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async editComment(boardId, task, list, comment) {
    try {
      const res = await api.put('api/board/' + boardId + '/lists/' + list._id + '/tasks/' + task._id + '/comments/' + comment._id, task)
      const index = AppState.tasks.findIndex(c => c._id === comment._id)
      AppState.tasks.splice(index, 1, comment)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteComment(boardId, task, list, comment) {
    try {
      const res = await api.delete('api/board/' + boardId + '/lists/' + list._id + '/tasks/' + task._id + '/comments/' + comment._id)
      const index = AppState.tasks.findIndex(c => c._id === comment._id)
      AppState.tasks.splice(index, 1)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const commentService = new CommentService()
