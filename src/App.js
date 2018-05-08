import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FilterLink, TodosList } from './components/todo';
import { getVisibleTodos } from './lib/todosHelpers';

let nextTodoId = 0;

class App extends Component {
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
                <TodosList 
                    todos={visibleTodos}
                    onTodoClick={id => 
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    } />
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

export default App;
