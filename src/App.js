import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodosList, AddTodo, Footer } from './components/todo';
import { getVisibleTodos } from './lib/todosHelpers';

let nextTodoId = 0;

class App extends Component {
    render() {
        const {store, todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        
        return (
            <div>
                <AddTodo 
                    onAddTodoClick={(text) => store.dispatch({
                        type: 'ADD_TODO',
                        text,
                        id: nextTodoId++
                    })} />
                <TodosList 
                    todos={visibleTodos}
                    onTodoClick={id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })} />
                <Footer store={store} />
            </div>
        );
    }    
}

export default App;
