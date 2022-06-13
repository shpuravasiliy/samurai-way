import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import Sidebar, {SidebarPropsType} from './sidebar/Sidebar';


const Navbar: React.FC<SidebarPropsType> = (props) => {
    return (
        <nav className={s.nav}>
            <li className={s.item}>
                <ul className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></ul>
                <ul className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></ul>
                <ul className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></ul>
                <ul className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></ul>
                <ul className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></ul>
            </li>
            <Sidebar friends={props.friends}/>
        </nav>
    );
};

export default Navbar;