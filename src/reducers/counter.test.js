import {counter} from './counter';
import {incrementCounter, removeCounter, addCounter} from '../lib/counterHelpers'
import deepFreeze from 'deep-freeze';

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

it('counter increments and decrements', () => {
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