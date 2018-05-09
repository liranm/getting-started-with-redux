import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VisibleTodosList, AddTodo, Footer } from './components/todo';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodosList />
                <Footer />
            </div>
        );
    }    
}

export default App;
