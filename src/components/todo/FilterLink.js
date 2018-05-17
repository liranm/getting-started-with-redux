import React, { Component } from 'react';
import { Link } from './Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }; 
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);