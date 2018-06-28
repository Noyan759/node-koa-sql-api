import * as Router from 'koa-router';
import { todoServices } from '../services/todo';

const router = new Router();
const BASE_URL = `/todos`;

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

router.get(BASE_URL, async (ctx) => {
    try {
        const todos = await todoServices.getAllTodos();
        if (todos.length) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: todos
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'No todos exist.'
            };
        }
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const todo = await todoServices.getSingleTodo(ctx);
        if (todo) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: todo
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That todo does not exist.'
            };
        }
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

router.post(`${BASE_URL}`, async (ctx) => {
    try {
        const todo = await todoServices.addTodo(ctx);
        if (todo) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                data: todo
            };
        } else {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                message: 'Something went wrong.'
            };
        }
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const todo = await todoServices.updateTodo(ctx);
        if (todo) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: todo
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That todo does not exist.'
            };
        }
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const todo = await todoServices.deleteTodo(ctx);
        if (todo) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: todo
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That todo does not exist.'
            };
        }
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

export const todoRoutes = router.routes();