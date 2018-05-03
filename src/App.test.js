import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import deepFreeze from 'deep-freeze';

const addCounter = list => [...list, 0];

const removeCounter = (list, index) => [
    ...list.slice(0, index),
    ...list.slice(index + 1)
];

const incrementCounter = (list, index) => [
  ...list.slice(0, index),
  list[index] + 1,
  ...list.slice(index + 1)
];

const toggleTodo = todo => ({
  ...todo,
  completed: !todo.completed 
});

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

it('todos should toggle a todo in state', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});

it('todos should add a todo to state', () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});

it('todo should be toggled', () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
});

it('counter should increment', () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
});

it('counter should be removed', () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
});

it('counter should be added', () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
});

it.skip('counter increments and decrements', () => {
  expect(
    counter(0, {type: 'INCREMENT'})
  ).toEqual(1);

  expect(
    counter(1, {type: 'INCREMENT'})
  ).toEqual(2);

  expect(
    counter(2, {type: 'DECREMENT'})
  ).toEqual(1);

  expect(
    counter(1, {type: 'DECREMENT'})
  ).toEqual(0);

  expect(
    counter(1, {type: 'SOMETHING_ELSE'})
  ).toEqual(1);

  expect(
    counter(undefined, {})
  ).toEqual(0);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
