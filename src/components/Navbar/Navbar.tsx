import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <li>
                <ul><a href="/profile">Profile</a></ul>
                <ul><a href="/dialogs">Messages</a></ul>
                <ul><a href="/news">News</a></ul>
                <ul><a href="/music">Music</a></ul>
                <ul><a href="/settings">Settings</a></ul>
            </li>
        </nav>
        // <nav className={s.nav}>
        //     <div>
        //         <a href="">Post</a>
        //     </div>
        //     <div>
        //         <a href="">Messages</a>
        //     </div>
        //     <div>
        //         <a href="">News</a>
        //     </div>
        //     <div>
        //         <a href="">Music</a>
        //     </div>
        //     <div>
        //         <a href="">Settings</a>
        //     </div>
        // </nav>
    );
};

export default Navbar;