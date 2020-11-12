import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import ProfileSchema from '../models/Profile'
import BoardSchema from '../models/Board'
import ListSchema from '../models/List'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
  Board = mongoose.model('Board', BoardSchema);
  List = mongoose.model('List', ListSchema);
  // Task = mongoose.model('Task', TaskSchema);
  // Comment = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
