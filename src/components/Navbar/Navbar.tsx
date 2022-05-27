import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <li>
                <ul><a href="src/components/Navbar/Navbar">Profile</a></ul>
                <ul><a href="src/components/Navbar/Navbar">Messages</a></ul>
                <ul><a href="src/components/Navbar/Navbar">News</a></ul>
                <ul><a href="src/components/Navbar/Navbar">Music</a></ul>
                <ul><a href="src/components/Navbar/Navbar">Settings</a></ul>
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