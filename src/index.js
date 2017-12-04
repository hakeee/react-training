import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const appState = {
//     addition: () => {
//         if(appState.input !== null) {
//             appState.sum += appState.input;
//             appState.input = null;
//             render(appState);
//         }
//     },
//     subtraction: () => {
//         if(appState.input !== null) {
//             appState.sum -= appState.input;
//             appState.input = null;
//             render(appState);
//         }
//     },
//     multiplication: () => {
//         if(appState.input !== null) {
//             appState.sum *= appState.input;
//             appState.input = null;
//             render(appState);
//         }
//     },
//     division: () => {
//         if(appState.input !== null) {
//             appState.sum /= appState.input;
//             appState.input = null;
//             render(appState);
//         }
//     },
//     c: () => {
//         appState.input = null;
//         render(appState);
//     },
//     cc: () => {
//         appState.input = null;
//         appState.sum = 0;
//         render(appState);
//     },
//     setinput: (number) => {
//         if(appState.input === null)
//             appState.input = number;
//         else
//             appState.input = String(appState.input).concat(number);
//         render(appState);
//     }
// }

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
