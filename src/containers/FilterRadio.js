import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const FilterRadio = withRouter(({ filter, children, history, match }) => {
    return (
        <label className="filter">
            <input 
                type="radio"
                checked={(match.params.filter || 'all') === filter}
                name="filter"
                className="filter__radio"
                onChange={(e) => 
                    history.push('/' + (filter === 'all' ? '' : filter))
                }
            />
            <span className={`filter__label--${children.toLowerCase()}`}>{children}</span>
        </label>
    );
});

export default FilterRadio;