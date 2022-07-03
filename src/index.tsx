import React from 'react';
import './index.css';
import {StateType, store} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={store.getState()}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);