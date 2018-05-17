import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;

export let AddTodo = ({ dispatch }) => {
    let input;
    
    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextTodoId++
                });
                input.value = '';
            }}>Add Todo</button>            
        </div>
    );
};

AddTodo = connect()(AddTodo);