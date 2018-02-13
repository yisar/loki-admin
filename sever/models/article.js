const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 新建文章用户模型
const Article = mongoose.model('article', new Schema({
  title: {type: String, require: true},
  content: {type: String, require: true},
  sort: {type: String, require: true},
  status: {type: String, require: true},
  time: {type: Date, default: Date.now},
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}))

module.exports = Article
