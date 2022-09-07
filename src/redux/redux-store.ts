import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
// ({ actionCreators, serialize: true, trace: true })
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25});

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

//@ts-ignore
window.store = store