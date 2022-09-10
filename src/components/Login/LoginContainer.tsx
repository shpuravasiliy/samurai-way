import React from 'react';
import Login from './Login';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

const LoginContainer = (props: mstpType) => {
    return (
        <>
            <Login {...props}/>
        </>
    );
};

type mstpType = {
    isAuth: boolean
}

const mstp = (state: AppStateType): mstpType => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export default connect(mstp)(LoginContainer);