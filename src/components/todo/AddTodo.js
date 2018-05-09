import React from 'react';
import PropTypes from 'prop-types';

let nextTodoId = 0;

export const AddTodo = (props, { store }) => {
    let input;
    
    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextTodoId++
                });
                input.value = '';
            }}>Add Todo</button>            
        </div>
    );
};

AddTodo.contextTypes = {
    store: PropTypes.object
};