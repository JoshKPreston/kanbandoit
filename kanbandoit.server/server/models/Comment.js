import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Comment = new Schema({
  content: {
    type: String,
    default: 'Add content here'
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
  taskId: {
    type: String,
    required: true,
    ref: 'Task'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

Comment.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

Comment.virtual('task', {
  localField: 'taskId',
  ref: 'Task',
  foreignField: '_id',
  justOne: true
})

export default Comment
