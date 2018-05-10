import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {todoApp} from './reducers';
import { Provider } from 'react-redux';

const store = createStore(todoApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
