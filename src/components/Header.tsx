import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6YsoUGsHJYbxnUS8Rm_1KOj_1mHunHU5_W2qlH06HUyIss09DJYJhv8_t74HHLWGElI&usqp=CAU"
                alt=""
            />
        </header>
    );
};

export default Header;