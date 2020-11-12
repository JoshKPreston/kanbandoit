// import { logger } from '../utils/Logger'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class ListService {
  async postList(reqBody) {
    try {
      return await dbContext.List.create(reqBody)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Lists On Db from the Dark Side')
    }
  }

  async getAllLists(currentUserId) {
    try {
      return await dbContext.List.find()
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Lists On Db from the Dark Side')
    }
  }

  async getListById(listId) {
    try {
      return await dbContext.List.findById(listId)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get List By Id On Db from the Dark Side')
    }
  }

  async editListById(listId, reqBody, currentUserId) {
    try {
      if (currentUserId !== reqBody.creatorId) {
        throw new BadRequest('You are not creator of this list!')
      } else {
        return await dbContext.List.findByIdAndUpdate(listId, reqBody, { new: true })
      }
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Edit List By Id On Db from the Dark Side')
    }
  }

  async deleteListById(listId, currentUserId) {
    try {
      return await dbContext.List.findOneAndDelete({ _id: listId, creatorId: currentUserId })
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Delete List By Id On Db from the Dark Side')
    }
  }
}
export const listService = new ListService()
