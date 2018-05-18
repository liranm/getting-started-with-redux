import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
