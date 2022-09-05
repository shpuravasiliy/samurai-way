import React, {FC} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, profileUserType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import withAuthentication from '../HOC/WithAuthentication';
import {compose} from 'redux';

type mapStateToPropsType = profileUserType
type mapDispatchToPropsType = {
    setUserProfile: (profile: profileUserType) => void
    getProfile: (userId: number) => void
}
type ProfileUserPropsType = mapStateToPropsType & mapDispatchToPropsType;
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileUserPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId ? this.props.userId : '2';
        this.props.getProfile(+userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        ...state.profilePage.profile,
    }
}

const connector = connect(mapStateToProps, {setUserProfile, getProfile})

export default compose<FC>(connector, withRouter, withAuthentication)(ProfileContainer)
