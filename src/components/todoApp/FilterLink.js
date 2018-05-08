import React from 'react';

export const FilterLink = (props) => {
    if(props.currentFilter === props.filter) {
        return (
            <span>{props.children}</span>
        );
    }

    return (
        <a href="#" 
            onClick={(e) => {
                e.preventDefault();
                props.store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                });
            }}>{props.children}</a>
    );
};