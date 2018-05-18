import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();



