import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';

const App = () => {
    const dialogs = () => <DialogsContainer/>;
    const profile = () => <Profile />;
    const users = () => <UsersContainer />;
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
                        <Route path='/users' render={users}/>
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