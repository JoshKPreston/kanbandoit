import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { taskService } from '../services/TaskService'
import { logger } from '../utils/Logger'
export class TaskController extends BaseController {
  constructor() {
    super('api/board/:id/lists/:listId/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllTasks)
      .get('/:taskId', this.getTaskById)
      .post('', this.postTask)
      .put('/:taskId', this.editTaskById)
      .delete('/:taskId', this.deleteTaskById)
  }

  async postTask(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await taskService.postTask(req.body))
    } catch (error) {
      logger.error('Failed to Post Task On service from the Dark Side')
      next(error)
    }
  }

  async getAllTasks(req, res, next) {
    try {
      res.send(await taskService.getAllTasks())
    } catch (error) {
      logger.error('Failed to Get All Tasks On service from the Dark Side')
      next(error)
    }
  }

  async getTaskById(req, res, next) {
    try {
      res.send(await taskService.getTaskById(req.params.taskId))
    } catch (error) {
      logger.error('Failed to Get Task By Id Tasks On service from the Dark Side')
      next(error)
    }
  }

  async editTaskById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await taskService.editTaskById(req.params.taskId, req.body, currentUserId))
    } catch (error) {
      logger.error('Failed to Edit Task By Id Tasks On service from the Dark Side')
      next(error)
    }
  }

  async deleteTaskById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await taskService.deleteTaskById(req.params.taskId, currentUserId))
    } catch (error) {
      logger.error('Failed to Delete Task By Id Tasks On service from the Dark Side')
      next(error)
    }
  }
}
