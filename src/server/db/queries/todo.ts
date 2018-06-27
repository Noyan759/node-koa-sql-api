import {
    testTodo
} from '../models/testTodo';

interface TodoModel {
    id?: number;
    task: string;
    status: string
}

let getAllTodos = async () => {
    const todos = await testTodo.findAll();
    return todos;
}

let getSingleTodo = async (id) => {
    const todo = await testTodo.findById(id);
    console.log('test');
    console.log(todo);
    console.log('done');
    return todo;
}

let addTodo = async (todo) => {
    const todoAdding: TodoModel = { task: todo.task, status: todo.status };
    await new testTodo(todoAdding).save();
    return todoAdding;
}

let updateTodo = async (id, todo) => {
    const rowsUpdate = await testTodo.update({status: todo.status}, {returning: true, where: {id: id} })
    console.log('hey: ',rowsUpdate);
    return rowsUpdate;
}

let deleteTodo = async (id) => {
    const deletedTodo = await testTodo.destroy({ where: { id: id }})
    
    console.log(`Has the todo been deleted? 1 means yes, 0 means no: ${deletedTodo}`);

    return deletedTodo;
}

export const todoQueries = {
    getAllTodos,
    getSingleTodo,
    addTodo,
    updateTodo,
    deleteTodo
};