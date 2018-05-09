import React, { Component } from 'react';
import { getVisibleTodos } from '../../lib/todosHelpers';
import { TodosList } from './TodosList';

export class VisibleTodosList extends Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.props;
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