import React from 'react';
import './index.css';
import {state, StateType, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);