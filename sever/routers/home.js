const Router = require('koa-router')
const home = require('../controllers/index')

const router = new Router()
router.get('/', home)

module.exports = router