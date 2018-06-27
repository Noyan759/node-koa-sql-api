import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import { config } from './config';
import { indexRoutes } from './routes/index';
import { todoRoutes } from './routes/todo';

const app = new Koa();

// body parser
app.use(bodyParser());

// routes
app.use(indexRoutes);
app.use(todoRoutes);

// server
app.listen(config.port)

console.log(`Server running on port ${config.port}`);