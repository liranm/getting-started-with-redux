import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const persistedState = {
    todos: [{
        id: 0,
        text: 'Welcome Back',
        completed: false
    }]
};

ReactDOM.render(
    <Provider store={createStore(rootReducer, persistedState)}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();



