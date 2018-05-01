import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
