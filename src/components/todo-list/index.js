import React from "react";
import { TodoItem } from "../todo-item";
import styles from './index.module.css';


export const TodoList = ({
    todos,
    onTodoStatusChange,
    onTodoDelete,
    onTodoTextEdit,
}) => {

    return (
        <ul className={styles.wrapper}>
            { todos.map(({id, ...otherProps}) => 
                (<TodoItem
                    key={id}
                    id={id}
                    onTodoDelete={onTodoDelete}
                    onTodoStatusChange={onTodoStatusChange}
                    onTodoTextEdit={onTodoTextEdit}
                    {...otherProps}
                />))}
        </ul>
    )
};