import {
    Table,
    Model,
    PrimaryKey,
    Column,
    AutoIncrement,
    DefaultScope
} from 'sequelize-typescript';

@DefaultScope({
    attributes: ['id', 'username', 'password']
})

@Table
export class testTodo extends Model<testTodo> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    username: string;

    @Column
    password: string;
}