import React, {Component} from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profile-reducer';

type mapStateToProps = {
    isAuth: boolean
    userId: number | null
}
type mapDispatchToProps = {
    getProfile: (userId: number) => void
}
export type NavbarContainerType = mapStateToProps & mapDispatchToProps

class NavbarContainer extends Component<NavbarContainerType> {

    render() {
        return <Navbar {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.id
})


export default connect(mapStateToProps, {getProfile})(NavbarContainer);