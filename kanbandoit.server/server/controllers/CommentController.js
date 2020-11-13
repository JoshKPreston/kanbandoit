import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import { logger } from '../utils/Logger'
export class CommentController extends BaseController {
  constructor() {
    super('api/board/:id/lists/:listId/tasks/:taskId/comments')
    this.router
      .get('', this.getAllComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:commentId', this.getCommentById)
      .post('', this.postComment)
      .put('/:commentId', this.editCommentById)
      .delete('/:commentId', this.deleteCommentById)
  }

  async postComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await commentService.postComment(req.body))
    } catch (error) {
      logger.error('Failed to Post Comment On service from the Dark Side')
      next(error)
    }
  }

  async getAllComments(req, res, next) {
    try {
      res.send(await commentService.getAllComments())
    } catch (error) {
      logger.error('Failed to Get All Comments On service from the Dark Side')
      next(error)
    }
  }

  async getCommentById(req, res, next) {
    try {
      res.send(await commentService.getCommentById(req.params.commentId))
    } catch (error) {
      logger.error('Failed to Get Comment By Id Comments On service from the Dark Side')
      next(error)
    }
  }

  async editCommentById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await commentService.editCommentById(req.params.commentId, req.body, currentUserId))
    } catch (error) {
      logger.error('Failed to Edit Comment By Id Comments On service from the Dark Side')
      next(error)
    }
  }

  async deleteCommentById(req, res, next) {
    try {
      const currentUserId = req.userInfo.id
      res.send(await commentService.deleteCommentById(req.params.commentId, currentUserId))
    } catch (error) {
      logger.error('Failed to Delete Comment By Id Comments On service from the Dark Side')
      next(error)
    }
  }
}
