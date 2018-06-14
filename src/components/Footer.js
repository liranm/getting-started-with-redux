import React from 'react';
import FilterRadio from '../containers/FilterRadio';

const Footer = () => (
    <fieldset className="filters">
        <legend className="filters__title">Show:</legend>
        <FilterRadio filter={'all'}>All</FilterRadio>
        <FilterRadio filter={'active'}>Active</FilterRadio>
        <FilterRadio filter={'completed'}>Completed</FilterRadio>
    </fieldset>
);

export default Footer;