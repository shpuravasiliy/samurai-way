import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';


// const rerenderEntireTree = (store: AppStateType) => {
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
// }

// rerenderEntireTree(store);
//
// store.subscribe(() => rerenderEntireTree(store));