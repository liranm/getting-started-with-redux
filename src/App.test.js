import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {todoApp} from './reducers';

const store = createStore(todoApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} {...store.getState()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
