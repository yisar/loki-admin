const mongoose = require('mongoose')

// 新建表模型
const User = mongoose.model('user', new mongoose.Schema({
  name: {type: String, require: true},
  pwd: {type: String, require: true},
  qq: {type: String, require: true},
  desc: {type: String, require: true}
}))

module.exports = User