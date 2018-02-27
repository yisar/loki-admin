const Article = require('../models/article')

module.exports = {
  async authorArticle(ctx) {
    let authorId = ctx.query.id
    const result = await Article.find({author: authorId})
    ctx.body = {
      code: 0,
      result
    }
  },

  // 撰写添加文章
  async writeArticle(ctx) {
    let data = ctx.request.body
    const id = ctx.cookies.get('id')
    console.log(id)
    const result = await Article.create({
      author: id,
      title: data.title,
      content: data.content,
      sort: data.sort,
      status: data.status
    })
    ctx.body = {
      code: 0,
      msg: '发表成功啦！',
      result
    }
  },

  // 查询所有文章

  async getArticle(ctx) {
    const result = await Article.find({})
    ctx.body = {
      code: 0,
      result
    }
  },

  // 查找单一文章

  async getOneArticle(ctx) {
    let id = ctx.query.id
    const result = await Article.findOne({_id: id})
    ctx.body = {
      code: 0,
      result
    }
  },

  // 更新文章
  async updateArticle(ctx) {
    let data = ctx.request.body
    console.log(data)
    await Article.update({_id: data._id}, {
      $set: {
        title: data.title,
        content: data.content,
        status: data.status,
        sort: data.sort
      }
    })
    ctx.body = {
      code: 0,
      msg: '更新成功啦！'
    }
  },

  // 删除文章
  async deleteOneArticle(ctx) {
    let id = ctx.query.id

    await Article.remove({_id: id})
    ctx.body = {
      code: 0,
      id
    }
  }
}
