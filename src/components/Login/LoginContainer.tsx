import React, {FC} from 'react';
import Login from './Login';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/auth-reducer';
import {LoginType} from './LoginForm/LoginForm';

type mapStateToPropsType = {
    isAuth: boolean
}
export type mapDispatchToPropsType = {
    login: (data: LoginType) => void
}
export type LoginContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const LoginContainer: FC<LoginContainerPropsType> = ({isAuth, ...restProps}) => {
    return (
        <>
            {isAuth ? <Redirect to={'/profile'}/> :
                <Login {...restProps}/>}
        </>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, {login})(LoginContainer);