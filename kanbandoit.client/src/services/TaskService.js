import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class TaskService {
  async getAllTasks(boardId, listId) {
    try {
      const res = await api.get('api/board/' + boardId + '/lists/' + listId + '/tasks')
      AppState.tasks = res.data
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  // async getTaskById(boardId, taskId) {
  //   try {
  //     const res = await api.get('api/board/' + boardId + '/tasks/' + taskId)
  //     AppState.task = res.data
  //     logger.log(res.data)
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }

  async createTask(newTask) {
    try {
      const res = await api.post('api/board/' + newTask.boardId + '/lists/' + newTask.listId + '/tasks', newTask)
      AppState.tasks = [...AppState.tasks, res.data]
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async editTask(task, boardId, list) {
    try {
      const res = await api.put('api/board/' + boardId + '/lists/' + list._id + '/tasks/' + task._id, task)
      const index = AppState.tasks.findIndex(t => t._id === task._id)
      AppState.tasks.splice(index, 1, task)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteTask(task, boardId, listId) {
    try {
      const res = await api.delete('api/board/' + boardId + '/lists/' + listId + '/tasks/' + task._id)
      const index = AppState.tasks.findIndex(t => t._id === task._id)
      AppState.tasks.splice(index, 1)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const taskService = new TaskService()
