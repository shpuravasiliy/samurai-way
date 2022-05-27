import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <li>
                <ul><a href="">Profile</a></ul>
                <ul><a href="">Messages</a></ul>
                <ul><a href="">News</a></ul>
                <ul><a href="">Music</a></ul>
                <ul><a href="">Settings</a></ul>
            </li>
        </nav>
        // <nav className={s.nav}>
        //     <div>
        //         <a href="">Profile</a>
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