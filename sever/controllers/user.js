const User = require('../models/user')
const utils = require('../common/utils')
const _ignore = {pwd: 0, __v: 0}
module.exports = {
  // 查找所有用户
  async getUser(ctx) {
    const result = await User.find({})
    ctx.body = {
      code:0,
      result
    }
  },
  // 用户信息
  async userInfo(ctx) {
    const id = await ctx.cookies.get('id')
    if (!id) {
      return ctx.body = {
        code: 1
      }
    }
    const result = await User.findOne({_id: id}, _ignore)
    ctx.body = {
      code: 0,
      result
    }

  },
  /*
  * 用户注册
  * */

  async userRegister(ctx) {
    let data = ctx.request.body
    const isexit = await User.findOne({name: data.name})
    if (isexit) {
      return ctx.body = {
        code: 1,
        msg: '用户名已存在'
      }
    }
    const result = await User.create({name: data.name, pwd: utils.md5Pwd(data.pwd), qq: data.qq})
    ctx.body = {
      code: 0,
      msg: '注册成功，马上跳转！',
      result
    }

  },

  /*
  * 用户登录*/

  async userLogin(ctx) {
    let data = ctx.request.body
    const isexit = await User.findOne({name: data.name, pwd: utils.md5Pwd(data.pwd)})
    if (!isexit) {
      return ctx.body = {
        code: 1,
        msg: '用户名或密码错误'
      }
    }
    const result = await User.findOne({name: data.name}, _ignore)
    const id = result._id

    // 设置cookie

    ctx.cookies.set(
      'id', id,
      {httpOnly:false}
    )
    ctx.body = {
      code: 0,
      msg: '登录成功，马上跳转！',
      result
    }
  }
}





