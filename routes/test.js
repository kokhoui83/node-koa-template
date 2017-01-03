import Router from 'koa-router'
let router = new Router({ prefix: '/test' })

router.get('/', async (context, next) => {
  try {
    context.body = 'GET /test'
  } catch (err) {
    context.body = { message: err.message }
    context.status = 500
  }
})

router.post('/', async (context, next) => {
  try {
    context.body = 'POST /test'
  } catch (err) {
    context.body = { message: err.message }
    context.status = 500
  }
})

module.exports = router
