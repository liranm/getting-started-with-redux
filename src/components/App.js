import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = ({ match }) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={match.params.filter || 'all'} />
        <Footer />
    </div>
);

export default App;
