import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const objectId = schema.Types.ObjectId
const Board = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No Description...'
  },
  creatorId: {
    type: String,
    required: true,
    ref: 'Profile'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

Board.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Board
