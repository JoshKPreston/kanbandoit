import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardService } from '../services/BoardService'
import { logger } from '../utils/Logger'
export class BoardController extends BaseController {
  constructor() {
    super('api/board')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.postBoard)
      .get('', this.getAllBoards)
      .get('/:boardId', this.getBoardById)
      .put('/:boardId', this.editBoardById)
      .delete('/:boardId')
  }

  async postBoard(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await boardService.postBoard(req.body))
    } catch (error) {
      logger.error('Failed to Post Board On service from the Dark Side')
      next(error)
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
      res.send(await boardService.getBoardById(req.params.boardId))
    } catch (error) {
      logger.error('Failed to Get Board By Id Boards On service from the Dark Side')
      next()
    }
  }

  async editBoardById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await boardService.editBoardById(req.params.boardId, req.body, currentUserId))
    } catch (error) {
      logger.error('Failed to Edit Board By Id Boards On service from the Dark Side')
      next(error)
    }
  }

  async deleteBoardById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await boardService.deleteBoardById(req.params.boardId, req.body, currentUserId))
    } catch (error) {
      logger.error('Failed to Delete Board By Id Boards On service from the Dark Side')
      next()
    }
  }
}
