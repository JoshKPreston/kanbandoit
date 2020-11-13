import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { listService } from '../services/ListService'
import { logger } from '../utils/Logger'
export class ListController extends BaseController {
  constructor() {
    super('api/board/:id/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllLists)
      .get('/:listId', this.getListById)
      .post('', this.postList)
      .put('/:listId', this.editListById)
      .delete('/:listId', this.deleteListById)
  }

  async postList(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await listService.postList(req.body))
    } catch (error) {
      logger.error('Failed to Post List On service from the Dark Side')
      next(error)
    }
  }

  async getAllLists(req, res, next) {
    try {
      res.send(await listService.getAllLists())
    } catch (error) {
      logger.error('Failed to Get All Lists On service from the Dark Side')
      next(error)
    }
  }

  async getListById(req, res, next) {
    try {
      res.send(await listService.getListById(req.params.listId))
    } catch (error) {
      logger.error('Failed to Get List By Id Lists On service from the Dark Side')
      next(error)
    }
  }

  async editListById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await listService.editListById(req.params.listId, req.body, currentUserId))
    } catch (error) {
      logger.error('Failed to Edit List By Id Lists On service from the Dark Side')
      next(error)
    }
  }

  async deleteListById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await listService.deleteListById(req.params.listId, currentUserId))
    } catch (error) {
      logger.error('Failed to Delete List By Id Lists On service from the Dark Side')
      next(error)
    }
  }
}
