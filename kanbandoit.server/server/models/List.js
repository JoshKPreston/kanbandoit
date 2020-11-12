import mongoose from 'mongoose'
const Schema = mongoose.Schema
const List = new Schema({
  title: {
    type: String,
    required: true
  },
  // color: {
  //   type: Boolean,
  //   default: false
  // },
  creatorId: {
    type: String,
    required: true,
    ref: 'Profile'
  },
  boardId: {
    type: String,
    required: true,
    ref: 'Board'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

List.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

List.virtual('board', {
  localField: 'boardId',
  ref: 'Board',
  foreignField: '_id',
  justOne: true
})

export default List
