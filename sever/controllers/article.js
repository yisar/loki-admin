const Article = require('../models/article')

module.exports = {
  async authorArticle(ctx) {
    let authorId = ctx.query.id
    const result = await Article.find({author:authorId})
    ctx.body = {
      code: 0,
      result
    }
  },
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

  // 查询单一用户的文章

  async getUserArticles(ctx) {
    let name = ctx.query.name
    const result = await Article.find({author: name})
    ctx.body = {
      code: 0,
      result
    }
  }
}