import * as Router from 'koa-router';
import { todoQueries } from '../db/queries/todo';

interface TodoModel {
    id: number;
    task: string;
    status: string
}

const router = new Router();
const BASE_URL = `/todos`;

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

router.get(BASE_URL, async (ctx) => {
    try {
        const todos = await todoQueries.getAllTodos();
        ctx.body = {
            status: 'success',
            data: todos
        };
    } catch (err) {
        console.log(err)
    }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const todo = await todoQueries.getSingleTodo(ctx.params.id);
        if (todo) {
            ctx.body = {
                status: 'success',
                data: todo
            }
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That todo does not exist.'
            };
        }
    } catch (err) {
        console.log(err)
    }
})

router.post(`${BASE_URL}`, async (ctx) => {
    try {
        const todo = await todoQueries.addTodo(ctx.request.body);
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
        console.log('caught err: ' + err);
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const todo = await todoQueries.updateTodo(ctx.params.id, ctx.request.body);
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
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const todo = await todoQueries.deleteTodo(ctx.params.id);
        // if (todo.length) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: todo
            };
        // } else {
        //     ctx.status = 404;
        //     ctx.body = {
        //         status: 'error',
        //         message: 'That todo does not exist.'
        //     };
        // }
    } catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
})

export const todoRoutes = router.routes();