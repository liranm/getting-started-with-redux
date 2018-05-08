import React from 'react';
import { Todo } from './Todo';

export const TodosList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id}
                onClick={() => onTodoClick(todo.id)}
                {...todo} />     
        ))}
    </ul>
);