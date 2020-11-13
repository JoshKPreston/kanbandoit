// import { logger } from '../utils/Logger'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class CommentService {
  async postComment(reqBody) {
    try {
      return await dbContext.Comment.create(reqBody)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Comments On Db from the Dark Side')
    }
  }

  async getAllComments(currentUserId) {
    try {
      return await dbContext.Comment.find()
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Comments On Db from the Dark Side')
    }
  }

  async getCommentById(commentId) {
    try {
      return await dbContext.Comment.findById(commentId)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get Comment By Id On Db from the Dark Side')
    }
  }

  async editCommentById(taskId, reqBody, currentUserId) {
    try {
      if (currentUserId !== reqBody.creatorId) {
        throw new BadRequest('You are not creator of this task!')
      } else {
        return await dbContext.Comment.findByIdAndUpdate(taskId, reqBody, { new: true })
      }
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Edit Comment By Id On Db from the Dark Side')
    }
  }

  async deleteCommentById(commentId, currentUserId) {
    try {
      return await dbContext.Comment.findOneAndDelete({ _id: commentId, creatorId: currentUserId })
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Delete Comment By Id On Db from the Dark Side')
    }
  }
}
export const commentService = new CommentService()
