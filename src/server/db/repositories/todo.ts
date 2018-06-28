import {
    testTodo
} from '../models/testTodo';

let getAllTodos = () => {
    return testTodo.findAll();
}

let getSingleTodo = (todo) => {
    return testTodo.findById(todo.id);
}

let addTodo = (todo) => {
    return new testTodo(todo).save();
}

let updateTodo = (todo) => {
    return testTodo.update({status: todo.status}, {returning: true, where: {id: todo.id} })
}

let deleteTodo = (todo) => {
    return testTodo.destroy({ where: { id: todo.id }})
}

export const todoRepositories = {
    getAllTodos,
    getSingleTodo,
    addTodo,
    updateTodo,
    deleteTodo
};