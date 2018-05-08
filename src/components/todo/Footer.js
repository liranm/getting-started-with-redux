import React from 'react';
import { FilterLink } from './FilterLink';

export const Footer = ({
    visibilityFilter,
    onFilterLinkClick
}) => (
    <p>
        Show:
        {' '}
        <FilterLink 
            filter={'SHOW_ALL'} 
            currentFilter={visibilityFilter}
            onClick={onFilterLinkClick}>All</FilterLink>
        {', '}
        <FilterLink 
            filter={'SHOW_ACTIVE'} 
            currentFilter={visibilityFilter}
            onClick={onFilterLinkClick}>Active</FilterLink>
        {', '}
        <FilterLink 
            filter={'SHOW_COMPLETED'} 
            currentFilter={visibilityFilter}
            onClick={onFilterLinkClick}>Completed</FilterLink>
    </p>
);