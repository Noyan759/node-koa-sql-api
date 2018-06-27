import {
    Table,
    Model,
    PrimaryKey,
    Column,
    AutoIncrement,
    DefaultScope
} from 'sequelize-typescript';

@DefaultScope({
    attributes: ['id', 'task', 'status']
})

@Table
export class testTodo extends Model<testTodo> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    task: string;

    @Column
    status: string;
}