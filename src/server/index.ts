import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { Sequelize } from 'sequelize-typescript'
import * as session from 'koa-session';
import * as passport from 'koa-passport';

import { config } from './config';
import { indexRoutes } from './controllers/index';
import { todoRoutes } from './controllers/todo';

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

// sequelize.sync({ force: true });

// sessions
app.keys = ['super-secret-key'];
app.use(session(app));

// body parser
app.use(bodyParser());

// authentication
require('./auth');
app.use(passport.initialize());
app.use(passport.session());;

// routes
app.use(indexRoutes);
app.use(todoRoutes);

// server
app.listen(config.port)

console.log(`Server running on port ${config.port}`);