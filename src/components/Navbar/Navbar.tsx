import React, {FC} from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import SidebarContainer from './sidebar/SidebarContainer';
import {NavbarContainerType} from './NavbarContainer';

const Navbar: FC<NavbarContainerType> = ({isAuth, userId, getProfile}) => {

    const profileOnClickHandler = () => {
        isAuth && userId && getProfile(userId)
    }

    return (
        <nav className={s.nav}>
            <ul className={s.item}>
                <li className={s.item}><NavLink to="/profile" onClick={profileOnClickHandler} activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Find users</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
            <SidebarContainer/>
        </nav>
    );
};

export default Navbar;