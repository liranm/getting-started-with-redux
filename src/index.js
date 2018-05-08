import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {todoApp} from './reducers';
import {TodoApp} from './components/todoApp'

const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(<TodoApp store={store} {...store.getState()} />, document.getElementById('root'));
};

store.subscribe(render);
render();
registerServiceWorker();



