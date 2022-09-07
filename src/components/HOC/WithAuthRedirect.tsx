import React, {Component, ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

// type configType = {
//     isAuth: boolean
//     redirectTo: string
// }
// const AuthRedirectComponent = connect(mapStateToPropsRedirect)(withAuthentication(Component))
// const withAuthentication = <T extends {isAuth: boolean}>(Component: ComponentType<T>): FC<T> => (props) => {
//     return props.isAuth ? <Component {...props}/> : <Redirect to={'/login'}/>
// }

type mapStateToPropsRedirectType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppStateType): mapStateToPropsRedirectType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

function withAuthRedirect <T = {}>(Component: ComponentType<T>) {
    // debugger
    const RedirectComponent = (props: mapStateToPropsRedirectType) => {
        const {isAuth, ...restProps} = props
        return  isAuth ? <Component {...restProps as T}/> : <Redirect to={'/login'}/>
    };

    return connect(mapStateToPropsRedirect)(RedirectComponent)

}
export default withAuthRedirect;