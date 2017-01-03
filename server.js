import koa from 'koa'
const app = new koa();

const port = process.env.PORT || 3001

import test from './routes/test'
import proxy from './routes/proxy'

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

app.use(test.routes()).use(test.allowedMethods())
app.use(proxy.routes()).use(proxy.allowedMethods())

app.listen(port)
