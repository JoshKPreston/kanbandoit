// import { logger } from '../utils/Logger'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class TaskService {
  async postTask(reqBody) {
    try {
      return await dbContext.Task.create(reqBody)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Tasks On Db from the Dark Side')
    }
  }

  async getAllTasks(currentUserId) {
    try {
      return await dbContext.Task.find()
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get All Tasks On Db from the Dark Side')
    }
  }

  async getTaskById(taskId) {
    try {
      return await dbContext.Task.findById(taskId)
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Get Task By Id On Db from the Dark Side')
    }
  }

  async editTaskById(taskId, reqBody, currentUserId) {
    try {
      if (currentUserId !== reqBody.creatorId) {
        throw new BadRequest('You are not creator of this task!')
      } else {
        return await dbContext.Task.findByIdAndUpdate(taskId, reqBody, { new: true })
      }
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Edit Task By Id On Db from the Dark Side')
    }
  }

  async deleteTaskById(taskId, currentUserId) {
    try {
      return await dbContext.Task.findOneAndDelete({ _id: taskId, creatorId: currentUserId })
    } catch (error) {
      throw new BadRequest(error)
      // logger.error('Failed to Delete Task By Id On Db from the Dark Side')
    }
  }
}
export const taskService = new TaskService()
