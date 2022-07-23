import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
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

const App = () => {



    // const dialogs = () => <DialogsContainer store={props.store}/>;
    const dialogs = () => <DialogsContainer/>;
    // const profile = () => <Profile store={props.store}/>;
    const profile = () => <Profile />;
    const news = () => <News/>;
    const music = () => <Music/>;
    const settings = () => <Settings/>;


    return (
        <BrowserRouter>
            <div className="placeholder">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
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