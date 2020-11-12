// import { logger } from '../utils/Logger'
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
      throw new BadRequest(error)
      // logger.error('Failed to Get All Boards On Db from the Dark Side')
    }
  }

  async getBoardById(boardId) {
    try {
      return await dbContext.Board.findById(boardId)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get Board By Id On Db from the Dark Side')
    }
  }

  async editBoardById(boardId, reqBody, currentUserId) {
    try {
      if (currentUserId !== reqBody.creatorId) {
        throw new BadRequest('You are not creator of this board!')
      } else {
        return await dbContext.Board.findByIdAndUpdate(boardId, reqBody, { new: true })
      }
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Edit Board By Id On Db from the Dark Side')
    }
  }

  async deleteBoardById(boardId, currentUserId) {
    try {
      return await dbContext.Board.findOneAndDelete({ _id: boardId, creatorId: currentUserId })
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Delete Board By Id On Db from the Dark Side')
    }
  }
}
export const boardService = new BoardService()
