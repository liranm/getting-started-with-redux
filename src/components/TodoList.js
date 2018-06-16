import React from 'react';
import Todo from './Todo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <TransitionGroup 
        component="ul"
        className="todo-list"
    >
        {todos.map(todo => (
            <CSSTransition 
                timeout={{
                    enter: 70,
                    exit: 70
                }}
                classNames="todo-transition"
            >
                <Todo key={todo.id}
                onClick={() => onTodoClick(todo.id)}
                {...todo} />     
            </CSSTransition>
        ))}
    </TransitionGroup>
);

export default TodoList;