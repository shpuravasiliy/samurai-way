import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    followAC,
    ServerResponseUsersType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersInitialStateType,
    userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import Users from './Users';

type mapStateToPropsType = UsersInitialStateType
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    onClickHandler = () => {
        // axios
        //     .get<ServerResponseUsersType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        //     .then((res) => {
        //         this.props.setUsers(res.data.items as userType[]);
        //     })
        this.onPageChanged(this.props.currentPage + 1)
    };

    componentDidMount() {
        axios
            .get<ServerResponseUsersType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.setUsers(res.data.items as userType[]);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
    }

    componentWillUnmount() {
        this.props.setUsers([])

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((res) => {
                this.props.setUsers(res.data.items as userType[])
            })
    }

    render() {
        return (
            <Users {...this.props}
                   changePageNumber={this.onPageChanged}
                   onClickButtonHandler={this.onClickHandler}
            />
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
        setTotalUsersCount: (TotalUsersCount: number) => dispatch(setTotalUsersCountAC(TotalUsersCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)