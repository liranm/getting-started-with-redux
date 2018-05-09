import React, { Component } from 'react';
import { getVisibleTodos } from '../../lib/todosHelpers';
import { TodosList } from './TodosList';

export class VisibleTodosList extends Component {
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = props.store.getState();
        const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter);

        return (
            <TodosList 
                todos={visibleTodos}
                onTodoClick={id => props.store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })} />    
        );
    }
}