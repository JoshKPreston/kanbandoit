import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const objectId = schema.Types.ObjectId
const Board = new Schema({
  boardTitle: {
    type: String,
    required: true
  },
  creatorId: {
    type: String,
    required: true
  },
  creatorEmail: {
    type: String,
    required: true
  }
})
export default Board
