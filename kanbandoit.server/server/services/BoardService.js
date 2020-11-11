import { logger } from '../utils/Logger'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class BoardService {
  async postBoard(reqBody) {
    try {
      return await dbContext.Board.create(reqBody)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Boards On Db from the Dark Side')
    }
  }

  async getAllBoards() {
    try {
      return await dbContext.Board.find()
    } catch (error) {
      logger.error('Failed to Get All Boards On Db from the Dark Side')
    }
  }

  async getBoardById(boardId) {
    try {
      return await dbContext.Board.findById(boardId)
    } catch (error) {
      logger.error('Failed to Get Board By Id On Db from the Dark Side')
    }
  }

  async editBoardById(boardId, reqBody, currentUserId) {
    try {
      if (currentUserId === reqBody.creatorId) { return await dbContext.Board.findByIdAndUpdate(boardId, reqBody, { new: true }) }
    } catch (error) {
      logger.error('Failed to Edit Board By Id On Db from the Dark Side')
    }
  }

  async deleteBoardById(boardId, reqBody, currentUserId) {
    try {
      if (currentUserId === reqBody.creatorId) { return await dbContext.Board.findByIdAndDelete(boardId) }
    } catch (error) {
      logger.error('Failed to Delete Board By Id On Db from the Dark Side')
    }
  }
}
export const boardService = new BoardService()
