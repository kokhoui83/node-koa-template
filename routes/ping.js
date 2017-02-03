import Router from 'koa-router'
let router = new Router({ prefix: '/ping' })

router.get('/', async (context, next) => {
  try {
    context.body = 'pong'
  } catch (err) {
    context.body = { message: err.message }
    context.status = 500
  }
})

module.exports = router
