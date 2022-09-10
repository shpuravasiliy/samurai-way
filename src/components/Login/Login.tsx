import React from 'react';
import {Redirect} from 'react-router-dom';

type LoginPropsType = {
    isAuth: boolean
}

const Login = ({isAuth}: LoginPropsType) => {
    return (
        <>
            {
                isAuth ? <Redirect to={'/profile'}/> :
                    (<div>
                        Login
                    </div>)
            }
        </>
    )
};

export default Login;