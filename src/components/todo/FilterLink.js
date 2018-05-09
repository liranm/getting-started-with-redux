import React, { Component } from 'react';
import { Link } from './Link';

export class FilterLink extends Component {
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
        const { store, filter, children } = this.props;
        const state = store.getState();
    
        return (
            <Link 
                active={state.visibilityFilter === filter}
                onClick={() => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                })} >{children}</Link>
        );
    }
}