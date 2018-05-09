import React from 'react';

export const FilterLink = ({
    filter,
    currentFilter,
    children,
    onClick
}) => {
    if(currentFilter === filter) {
        return (
            <span>{children}</span>
        );
    }

    return (
        <a href="#" 
            onClick={e => {
                e.preventDefault();
                onClick(filter);
            }}>{children}</a>
    );
};