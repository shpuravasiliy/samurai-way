import {connect} from 'react-redux';
import {
    follow,
    getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UsersInitialStateType,
    userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React, {FC} from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../HOC/WithAuthRedirect';
import {compose} from 'redux';

type mapStateToPropsType = UsersInitialStateType
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userID: number) => void
    getUsersTC: (pageSize: number, currentPage: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage)
    }

    componentWillUnmount() {
        this.props.setUsers([])
    }

    onClickHandler = () => {
        this.onPageChanged(this.props.currentPage + 1)
    };
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersTC(this.props.pageSize, pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users {...this.props}
                             changePageNumber={this.onPageChanged}
                             onClickButtonHandler={this.onClickHandler}
                    />}
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        ...state.usersPage
    }
}

const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsersTC
})

export default compose<FC>(connector, withAuthRedirect)(UsersContainer)
