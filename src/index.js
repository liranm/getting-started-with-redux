import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {todoApp} from './reducers';
import { Provider } from './components/Provider';

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();



