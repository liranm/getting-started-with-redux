import React, { Component } from 'react';
import { Link } from './Link';
import PropTypes from 'prop-types';

export class FilterLink extends Component {
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
        const { filter, children } = this.props;
        const { store } = this.context;
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

FilterLink.contextTypes = {
    store: PropTypes.object
};