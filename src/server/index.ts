import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { Sequelize } from 'sequelize-typescript'

import { config } from './config';
import { indexRoutes } from './routes/index';
import { todoRoutes } from './routes/todo';

const app = new Koa();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    name: 'ToDo',
    username: 'test',
    password: 'test@759',
    modelPaths: [
        __dirname + '/db/models'
    ]
});

sequelize.sync({ force: true });

// body parser
app.use(bodyParser());

// routes
app.use(indexRoutes);
app.use(todoRoutes);

// server
app.listen(config.port)

console.log(`Server running on port ${config.port}`);