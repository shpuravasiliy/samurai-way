import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    followAC,
    ServerResponseUsersType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetchingAC,
    unfollowAC,
    UsersInitialStateType,
    userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

type mapStateToPropsType = UsersInitialStateType
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    onClickHandler = () => {
        this.onPageChanged(this.props.currentPage + 1)
    };

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get<ServerResponseUsersType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.setUsers(res.data.items as userType[]);
                this.props.setTotalUsersCount(res.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    componentWillUnmount() {
        this.props.setUsers([])

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((res) => {
                this.props.setUsers(res.data.items as userType[]);
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
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (TotalUsersCount: number) => dispatch(setTotalUsersCountAC(TotalUsersCount)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleFetchingAC(isFetching)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)