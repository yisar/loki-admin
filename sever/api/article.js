/*
* restful api
*/

const Router = require('koa-router')
const article = require('../controllers/article')

const router = new Router()

router.get('/author', article.authorArticle)
router.post('/write',article.writeArticle)
router.get('/articles',article.getUserArticles)

module.exports = router