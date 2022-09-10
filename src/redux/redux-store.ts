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