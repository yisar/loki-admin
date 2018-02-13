/*
* restful api
*/

const Router = require('koa-router')
const article = require('../controllers/article')

const router = new Router()

router.get('/list', article.articleList)
router.post('/write',article.writeArticle)

module.exports = router