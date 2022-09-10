import React, {FC} from 'react';
import {LoginForm} from './LoginForm/LoginForm';
import {LoginContainerPropsType} from './LoginContainer';

export type LoginPropsType = Omit<LoginContainerPropsType, 'isAuth'>

const Login: FC<LoginPropsType> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    )
};

export default Login;