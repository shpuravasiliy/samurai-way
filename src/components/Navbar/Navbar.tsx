import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import {StoreContext} from '../../StoreContext';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.item}>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
            <StoreContext.Consumer>
                {store => {
                    const friends = store.getState().sidebar.friends
                    return (
                        <Sidebar friends={friends}  dispatch={store.dispatch}/>
                    )
                }}
            </StoreContext.Consumer>
        </nav>
    );
};

export default Navbar;