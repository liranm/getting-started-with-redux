import React, { Component } from 'react';
import { FilterLink } from './FilterLink';
import { getVisibleTodos } from '../../lib/todosHelpers';

let nextTodoId = 0;

export class TodoApp extends Component {
    render() {
        const {store, todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);

        return (
            <div>
                <input type="text" ref={node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    });
                    this.input.value = '';
                }}>Add Todo</button>
                <ul>
                    {visibleTodos.map((todo) => {
                        return (
                            <li 
                                key={todo.id}
                                onClick={() => {
                                    store.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    });
                                }}
                                style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>
                                {todo.text}
                            </li>       
                        );
                    })}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink store={store} filter={'SHOW_ALL'} currentFilter={visibilityFilter}>All</FilterLink>
                    {', '}
                    <FilterLink store={store} filter={'SHOW_ACTIVE'} currentFilter={visibilityFilter}>Active</FilterLink>
                    {', '}
                    <FilterLink store={store} filter={'SHOW_COMPLETED'} currentFilter={visibilityFilter}>Completed</FilterLink>
                </p>
            </div>
        );
    }    
}