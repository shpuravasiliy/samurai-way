import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {profileUserType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileUserPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId ? this.props.userId : '2';
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(WithRouterProfileContainer);