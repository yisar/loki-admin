const Koa = require('koa')
// post请求中间件
const path = require('path')
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
// 引入static中间件
const static = require('koa-static')

const app = new Koa()
const router = new Router()
const staticPath = './common'

router.get('/', async (ctx) => {
    let url = ctx.url
    let req_q = ctx.query
    let req_qs = ctx.querystring

    ctx.body = {
        url,
        req_q,
        req_qs
    }
})

// app.use(async (ctx) => {
//     if (ctx.url === '/cookie') {
//         ctx.cookies.set(
//             'uname', 'masa'
//         )
//         ctx.body = 'cookie is ok!'
//     }
// })

app.use(bodyparser())

app.use(router.routes())

app.use(static(path.join(__dirname, staticPath)))

app.listen(3000)

console.log('iiiiiii am starting')