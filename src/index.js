import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {todoApp} from './reducers';

const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

store.subscribe(render);
render();
registerServiceWorker();

console.dir(`Initial state: ${JSON.stringify(store.getState())}`);
console.log('--------------------------------------------------------');
console.log('Dispatching ADD_TODO.');

store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log(`Current state: ${JSON.stringify(store.getState())}`)
console.log('--------------------------------------------------------');
console.log('Dispatching ADD_TODO.');

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go Shopping'
});

console.log(`Current state: ${JSON.stringify(store.getState())}`)
console.log('--------------------------------------------------------');
console.log('Dispatching TOGGLE_TODO.');

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log(`Current state: ${JSON.stringify(store.getState())}`)
console.log('--------------------------------------------------------');
console.log('Dispatching SET_VISIBILITY_FILTER.');

store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log(`Current state: ${JSON.stringify(store.getState())}`)
console.log('--------------------------------------------------------');


