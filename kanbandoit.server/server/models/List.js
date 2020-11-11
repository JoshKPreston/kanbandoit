import mongoose from 'mongoose'
const Schema = mongoose.Schema
const objectId = Schema.Types.ObjectId
const List = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No Description...'
  },
  status: {
    type: Boolean,
    default: false
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
    type: objectId,
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

export default List
