import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
    componentDidMount() {
        fetchTodos(this.props.filter).then(todos => 
            console.log(this.props.filter, todos));
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then(todos =>
                console.log(this.props.filter, todos));
        }
    }
    
    render() {
        return (
            <TodoList {...this.props} />
        );
    }
}

const mapStateToProps = (state, { match }) => ({
    filter: match.params.filter || 'all',   
    todos: getVisibleTodos(state, match.params.filter)
});

VisibleTodoList = withRouter(connect(
    mapStateToProps, 
    { onTodoClick: toggleTodo }
)(VisibleTodoList));

export default VisibleTodoList;