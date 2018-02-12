/*
* restful api
*/

const Router = require('koa-router')

const router = new Router()

router.get('/article', async (ctx) => {
    const url = ctx.url
    ctx.body = {
        url,
    }
})

module.exports = router