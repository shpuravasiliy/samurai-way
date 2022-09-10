import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {RequestStatusType} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';

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
    authEntityStatus: RequestStatusType
}

const mapStateToPropsRedirect = (state: AppStateType): mapStateToPropsRedirectType => {
    return {
        isAuth: state.auth.isAuth,
        authEntityStatus: state.auth.entityStatus
    }
}

function withAuthRedirect <T = {}>(Component: ComponentType<T>) {
    // debugger
    const RedirectComponent = (props: mapStateToPropsRedirectType) => {
        const {isAuth, authEntityStatus, ...restProps} = props
        if (authEntityStatus === 'loading') return <Preloader/>

        return isAuth ? <Component {...restProps as T}/> : <Redirect to={'/login'}/>
    };

    return connect(mapStateToPropsRedirect)(RedirectComponent)

}
export default withAuthRedirect;