import React from 'react';
import Header from './Header';
import {initialStateType, setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {profileUserType, setUserProfile} from '../../redux/profile-reducer';
import {authAPI, profileAPI} from '../../api/api';

type mapStateToPropsType = initialStateType
type mapDispatchToPropsType = {
    setAuthUserData: ({id, email, login}: initialStateType) => void
    setUserProfile: (profile: profileUserType) => void
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI.getAuthStatus()
            .then((res) => {
                res.resultCode === 0 ? this.props.setAuthUserData(res.data) : new Error('You not login yet');
                return profileAPI.getProfile(res.data.id)
            })
            .then(res => {
                this.props.setUserProfile(res)
            })
            .catch(rej => console.log(rej))
    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        ...state.auth
    }
}

export default connect(mapStateToProps, {
    setAuthUserData,
    setUserProfile,
})(HeaderContainer);