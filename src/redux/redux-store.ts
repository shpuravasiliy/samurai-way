import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

// export type RootActionType = UpdateNewPostTextACType | AddPostACType | sendMessageACType | UpdateNewMessageBodyACType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

export const store = createStore(reducers)