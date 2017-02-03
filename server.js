import koa from 'koa'
import bodyParser from 'koa-bodyparser'

const port = process.env.PORT || 3000
const app = new koa()

app.use(bodyParser())

import ping from './routes/ping'
import test from './routes/test'

// x-response-time
app.use(async (context, next) => {
  let start = new Date;
  await next();
  let ms = new Date - start;
  context.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(async (context, next) => {
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', context.method, context.url, ms);
});

app.use(ping.routes()).use(ping.allowedMethods())
app.use(test.routes()).use(test.allowedMethods())

app.listen(port)
