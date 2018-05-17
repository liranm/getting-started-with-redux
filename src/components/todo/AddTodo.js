import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

export let AddTodo = ({ dispatch }) => {
    let input;
    
    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>Add Todo</button>            
        </div>
    );
};

AddTodo = connect()(AddTodo);