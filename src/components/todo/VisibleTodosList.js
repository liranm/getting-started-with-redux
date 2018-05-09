import React, { Component } from 'react';
import { getVisibleTodos } from '../../lib/todosHelpers';
import { TodosList } from './TodosList';
import PropTypes from 'prop-types';

export class VisibleTodosList extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter);

        return (
            <TodosList 
                todos={visibleTodos}
                onTodoClick={id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })} />    
        );
    }
}

VisibleTodosList.contextTypes = {
    store: PropTypes.object
};