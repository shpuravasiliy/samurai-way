import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {RootActionType, StateType} from './redux/store';
import {StoreType} from './index';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export type AppPropsType = {
    state: StateType
    dispatch: (action: RootActionType) => void
}

export type ContainerPropsType = {
    store: StoreType
}

const App: React.FC<ContainerPropsType> = (props) => {

    // const dialogs = () => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} newMessageBody={props.state.dialogsPage.newMessageBody} dispatch={props.dispatch}/>;
    // const profile = () => <Profile myPosts={props.state.profilePage.myPosts} dispatch={props.dispatch}/>;
    const dialogs = () => <DialogsContainer store={props.store}/>;
    const profile = () => <Profile store={props.store}/>;
    const news = () => <News/>;
    const music = () => <Music/>;
    const settings = () => <Settings/>;
    const friends = props.store.getState().sidebar.friends

    return (
        <BrowserRouter>
            <div className="placeholder">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar friends={friends} dispatch={props.store.dispatch}/>
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={dialogs} />
                        <Route path='/profile' render={profile}/>
                        <Route path='/news' render={news}/>
                        <Route path='/music' render={music}/>
                        <Route path='/settings' render={settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;