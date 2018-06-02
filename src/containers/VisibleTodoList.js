import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        
        fetchTodos(filter);
    }
    
    render() {
        const { toggleTodo, ...rest } = this.props;

        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';

    return {
        filter,
        todos: getVisibleTodos(state, filter)
    };
};

VisibleTodoList = withRouter(connect(
    mapStateToProps, 
    actions
)(VisibleTodoList));

export default VisibleTodoList;