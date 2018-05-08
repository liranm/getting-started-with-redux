import React from 'react';

export const AddTodo = ({
    onAddTodoClick
}) => {
    let input;

    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                onAddTodoClick(input.value);
                input.value = '';
            }}>Add Todo</button>            
        </div>
    );
};