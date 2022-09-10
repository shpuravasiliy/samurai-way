import React, {FC} from 'react';
import style from './Header.module.css';
import  logo from '../../assets/images/logo.png'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

const Header: FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    const logoutHandler = () => {
        logout()
    };

    return (
        <header className={style.header}>
            <img
                src={logo}
                alt="logo"
            />
            <div className={style.loginBlock}>
                {isAuth
                    ? <div>
                        <div>{login}</div>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;