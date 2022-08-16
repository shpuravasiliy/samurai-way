import React from 'react';
import Header from './Header';
import axios from 'axios';
import {initialStateType, setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {profileUserType, setUserProfile} from '../../redux/profile-reducer';

type ServerResponseType = {
    resultCode: number
    messages: Array<string>,
    data: initialStateType
}

type mapStateToPropsType = initialStateType
type mapDispatchToPropsType = {
    setAuthUserData: ({id, email, login}: initialStateType) => void
    setUserProfile: (profile: profileUserType) => void
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios
            .get<ServerResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((res) => {
                // console.log(res.data);
                res.data.resultCode === 0 ? this.props.setAuthUserData(res.data.data) : new Error('You not login yet');
                return axios.get<profileUserType>(`https://social-network.samuraijs.com/api/1.0/profile/` + res.data.data.id)
            })
            .then(res => {
                this.props.setUserProfile(res.data)
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