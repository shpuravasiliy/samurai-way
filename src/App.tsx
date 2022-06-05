import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className="placeholder">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Profile />*/}
                    <Dialogs/>
                </div>
            </div>
        </div>
    );
}

export default App;