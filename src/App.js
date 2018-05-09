import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VisibleTodosList, AddTodo, Footer } from './components/todo';

class App extends Component {
    render() {
        const { store } = this.props;
        
        return (
            <div>
                <AddTodo store={store} />
                <VisibleTodosList store={store} />
                <Footer store={store} />
            </div>
        );
    }    
}

export default App;
