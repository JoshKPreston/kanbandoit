import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Task = new Schema({
  title: {
    type: String,
    default: 'Task title...'
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
  listId: {
    type: String,
    required: true,
    ref: 'List'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

Task.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

Task.virtual('list', {
  localField: 'listId',
  ref: 'List',
  foreignField: '_id',
  justOne: true
})

export default Task
