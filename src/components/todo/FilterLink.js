import React, { Component } from 'react';
import { Link } from './Link';

export class FilterLink extends Component {
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
    
        return (
            <Link 
                active={state.visibilityFilter === props.filter}
                onClick={() => props.store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })} >{props.children}</Link>
        );
    }
}