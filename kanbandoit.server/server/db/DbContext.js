import mongoose from 'mongoose'
import ProfileSchema from '../models/Profile'
import BoardSchema from '../models/Board'
import ListSchema from '../models/List'
import TaskSchema from '../models/Task'
import CommentSchema from '../models/Comment'

class DbContext {
  Profile = mongoose.model('Profile', ProfileSchema);
  Board = mongoose.model('Board', BoardSchema);
  List = mongoose.model('List', ListSchema);
  Task = mongoose.model('Task', TaskSchema);
  Comment = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
