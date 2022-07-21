import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {ProfilePropsType} from './components/Profile/Profile';
import {DialogsPropsType} from './components/Dialogs/Dialogs';
import {EmptyObject, Store} from 'redux';
import {SidebarPropsType} from './components/Navbar/sidebar/Sidebar';

export type StoreType = Store<EmptyObject & { profilePage: ProfilePropsType; dialogsPage: DialogsPropsType; sidebar: SidebarPropsType }>

const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(() => rerenderEntireTree(store));