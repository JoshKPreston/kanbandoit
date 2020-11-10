import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardService } from '../services/BoardService'
import { logger } from '../utils/Logger'
export class BoardController extends BaseController {
  constructor() {
    super('api/board')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('')
      .get('')
      .get('/:boardId')
      .put('/:boardId')
      .delete('/:boardId')
  }

  async postBoard(req, res, next) {
    try {
      res.send(await boardService.postBoard())
    } catch (error) {
      logger.error('Failed to Post Board On service from the Dark Side')
      next()
    }
  }

  async getAllBoards(req, res, next) {
    try {
      res.send(await boardService.getAllBoards())
    } catch (error) {
      logger.error('Failed to Get All Boards On service from the Dark Side')
      next()
    }
  }

  async getBoardById(req, res, next) {
    try {
      res.send(await boardService.getBoardById(boardId))
    } catch (error) {
      logger.error('Failed to Get Board By Id Boards On service from the Dark Side')
      next()
    }
  }

  async editBoardById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await boardService.editBoardById(boardId, req.body, currentUserId))
    } catch (error) {
      logger.error('Failed to Edit Board By Id Boards On service from the Dark Side')
      next()
    }
  }
}
