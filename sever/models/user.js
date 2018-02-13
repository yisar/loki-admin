const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 新建表模型
const User = mongoose.model('user', new Schema({
  name: {type: String, require: true},
  pwd: {type: String, require: true},
  qq: {type: String, require: true},
  desc: {type: String, require: true}
}))

module.exports = User