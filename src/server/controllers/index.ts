import * as Router from 'koa-router';
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
})

export const indexRoutes = router.routes();