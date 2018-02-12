const mongoose = require('mongoose')

// 新建文章用户模型
const Article = mongoose.model('article', new mongoose.Schema({
  title: {type: String, require: true},
  userId: {type: Number, require: true},
  content: {type: String, require: true},
  sort: {type: String, require: true},
  status: {type: String, require: true},
  time: {type: Number, require: true}
}))

module.exports = Article
