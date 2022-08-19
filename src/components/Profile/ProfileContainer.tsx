import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {profileUserType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileUserPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId ? this.props.userId : '2';
        profileAPI.getProfile(+userId)
            .then((res) => {
                this.props.setUserProfile(res);
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