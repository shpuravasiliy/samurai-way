import React, {Component, ComponentType, PropsWithChildren} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type configType = {
    isAuth: boolean
    redirectTo: string
}


// const AuthRedirectComponent = connect(mapStateToPropsRedirect)(withAuthentication(Component))

// const withAuthentication = <T extends {isAuth: boolean}>(Component: ComponentType<T>): FC<T> => (props) => {
//     return props.isAuth ? <Component {...props}/> : <Redirect to={'/login'}/>
// }
const mapStateToPropsRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type mapStateToPropsRedirectType = ReturnType<typeof mapStateToPropsRedirect>

const withAuthentication = <T extends {}>(Component: ComponentType<T>, ...funcs: Function[]) => {
    type example = PropsWithChildren<any> & mapStateToPropsRedirectType
    const RedirectComponent = (props: example) => props.isAuth ? <Component {...props}/> : <Redirect to={'/login'}/>;

    return connect(mapStateToPropsRedirect)(RedirectComponent)

}
export default withAuthentication;