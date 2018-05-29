import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { fetchTodos } from './api';

fetchTodos('all').then(todos => 
    console.log(todos));

const store = configureStore();

ReactDOM.render(
    <Root store={store} />, 
    document.getElementById('root')
);

registerServiceWorker();



