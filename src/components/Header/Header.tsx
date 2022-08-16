import React, {FC} from 'react';
import style from './Header.module.css';
import  logo from '../../assets/images/logo.png'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={style.header}>
            <img
                src={logo}
                alt="logo"
            />
            <div className={style.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;