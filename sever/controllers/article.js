const Article = require('../models/article')

module.exports = {
  async articleList(ctx) {
    let id=ctx.query.id
    const result = await Article.find({}).populate('_user')
    ctx.body = {
      code: 0,
      result
    }
  },
  async writeArticle(ctx) {
    let data = ctx.request.body
    const result =await Article.create({
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
  }
}