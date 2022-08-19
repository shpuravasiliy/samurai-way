import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UsersInitialStateType,
    userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

type mapStateToPropsType = UsersInitialStateType
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userID: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then((res) => {
                this.props.setUsers(res.items);
                this.props.setTotalUsersCount(res.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    componentWillUnmount() {
        this.props.setUsers([])
    }

    onClickHandler = () => {
        this.onPageChanged(this.props.currentPage + 1)
    };
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then((res) => {
                this.props.setUsers(res.items);
                this.props.toggleIsFetching(false)
            })
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
})(UsersContainer)