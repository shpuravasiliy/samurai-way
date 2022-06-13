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
import {StateType} from './redux/state';

export type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = (props) => {
    // const [posts, setPosts] = useState<PostPropsType[]>(state.profilePage.myPosts.posts)
    // const [dialogs, setDialogs] = useState<PostPropsType[]>(props.posts)
    // const addDialog = (message: string) => {
    //     const newPost: PostPropsType = {
    //         id: '100',
    //         message: message,
    //         likesCount: 0
    //     }
    //     setPosts([newPost, ...posts])
    // }
    //
    // const [messages, setMessages] = useState<PostPropsType[]>(props.posts)
    // const addMessage = (message: string) => {
    //     const newPost: PostPropsType = {
    //         id: '100',
    //         message: message,
    //         likesCount: 0
    //     }
    //     setPosts([newPost, ...posts])
    // }

    const dialogs = () => <Dialogs state={props.state.dialogsPage}/>;
    const profile = () => <Profile state={props.state.profilePage}/>;
    const news = () => <News/>;
    const music = () => <Music/>;
    const settings = () => <Settings/>;
    return (
        <BrowserRouter>
            <div className="placeholder">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar friends={props.state.sidebar.friends}/>
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