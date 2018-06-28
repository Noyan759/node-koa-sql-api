import {
    todoRepositories
} from '../db/repositories/todo';

import * as Joi from 'joi';

const idSchema = {
    id: Joi.number().required()
};

const addTodoSchema = {
    task: Joi.string().required(),
    status: Joi.string().valid('pending','in progress','done')
};

const updateTodoSchema = {
    id: Joi.number().required(),
    status: Joi.string().valid('pending','in progress','done').required()
}

interface TodoModel {
    id?: number;
    task?: string;
    status?: string
}

let getAllTodos = () => {

    return todoRepositories.getAllTodos();
}

let getSingleTodo = (req) => {
    const todo: TodoModel = {
        id : req.params.id
    };
    const result = Joi.validate(todo, idSchema)
    if(result.error)
        return result;
    else 
        return todoRepositories.getSingleTodo(todo);
}

let addTodo = (req) => {
    console.log('req : ', req)
    const todo: TodoModel = { 
        task: req.request.body.task, 
        status: (req.request.body.status || 'pending').toLocaleLowerCase()
    };
    const result = Joi.validate(todo, addTodoSchema)
    if(result.error)
        return result;
    else 
        return todoRepositories.addTodo(todo);
}

let updateTodo = (req) => {
    const todo: TodoModel = { 
        id: req.params.id, 
        status: req.request.body.status
    };
    if(todo.status)
        todo.status = todo.status.toLocaleLowerCase()
    const result = Joi.validate(todo, updateTodoSchema)
    if(result.error)
        return result;
    else 
    return todoRepositories.updateTodo(todo)
}

let deleteTodo = (req) => {
    const todo: TodoModel = { 
        id: req.params.id 
    };
    const result = Joi.validate(todo, idSchema)
    if(result.error)
        return result;
    else 
        return todoRepositories.deleteTodo(todo)
}

export const todoServices = {
    getAllTodos,
    getSingleTodo,
    addTodo,
    updateTodo,
    deleteTodo
};