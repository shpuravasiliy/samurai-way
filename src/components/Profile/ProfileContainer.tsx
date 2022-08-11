import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {profileUserType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';

class ProfileContainer extends React.Component<ProfileUserPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data as profileUserType);
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): profileUserType => {
    return {
        ...state.profilePage.profile
    }
}

type mapStateToPropsType = profileUserType
type mapDispatchToPropsType = {
    setUserProfile: (profile: profileUserType) => void
}

type ProfileUserPropsType = mapStateToPropsType & mapDispatchToPropsType;

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);