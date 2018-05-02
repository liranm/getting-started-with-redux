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
