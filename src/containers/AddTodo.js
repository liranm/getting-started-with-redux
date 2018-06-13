import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;
    
    return (
        <div className="add-todo">
            <input
                type="text"
                ref={node => { input = node; }}
                className="add-todo__input"
                placeholder="new todo"
                onKeyUp={(e)=> {
                    if(e.keyCode === 13) {
                        dispatch(addTodo(input.value));
                        input.value = '';
                    }
                }}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
                className="add-todo__button"
            >
                Add Todo
            </button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;