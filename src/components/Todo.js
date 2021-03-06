import React from 'react';

const Todo = ({
    onClick,
    text,
    completed
}) => (
    <li 
        onClick={onClick}
        className={completed ? "todo-list__item--completed" : "todo-list__item--active"}
    >
        {text}
    </li>
);

export default Todo;