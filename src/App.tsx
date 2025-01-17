import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import LoginContainer from './components/Login/LoginContainer';

const App = () => {
    const dialogs = () => <DialogsContainer/>;
    const profile = () => <ProfileContainer/>;
    const users = () => <UsersContainer/>;
    const news = () => <News/>;
    const music = () => <Music/>;
    const settings = () => <Settings/>;
    const login = () => <LoginContainer/>;

    return (
            <div className="placeholder">
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={dialogs} />
                        <Route path='/profile/:userId?' render={profile}/>
                        <Route path='/users' render={users}/>
                        <Route path='/news' render={news}/>
                        <Route path='/music' render={music}/>
                        <Route path='/settings' render={settings}/>
                        <Route path='/login' render={login}/>
                    </div>
                </div>
            </div>
    );
}

export default App;