const Article = require('../models/article')

module.exports = {
  async articleList(ctx) {
    const result = await Article.find({})
    ctx.body = {
      code: 0,
      result
    }
  }
}