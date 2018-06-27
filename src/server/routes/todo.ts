import * as Router from 'koa-router';
const router = new Router();

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

export const todoRoutes = router.routes();