import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = () => (
    <div className="todo-app">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
