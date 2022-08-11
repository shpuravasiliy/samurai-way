import React from 'react';
import {UsersPropsType} from './UsersContainer';
import User from './User/User';
import axios from 'axios';
import {ServerResponseUsersType, userType} from '../../redux/users-reducer';
import style from './Users.module.css'

type OwnStateType = {
    countUsers: number,
    page: number
}

class Users extends React.Component<UsersPropsType, OwnStateType> {
    state: OwnStateType = {
        countUsers: 4,
        page: 1
    };

    onClickHandler = () => {
        this.setState((state) => ({
                page: state.page + 1,
            }),
            () => {
                axios
                    .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.countUsers}&page=${this.state.page}`)
                    .then((res) => {
                        this.props.setUsers(res.data.items as userType[]);
                    })
            });
    }

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
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.countUsers}&page=${pageNumber}`)
            .then((res) => {
                this.props.setUsers(res.data.items as userType[])
            })

    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }

        const showPages = pagesCount > 5 ? this.props.currentPage <= 3 ? pages.slice(0, 5) : pages.slice(this.props.currentPage - 3, this.props.currentPage + 2) : pages

        return (
            <div>
                <div>
                    {showPages.map(p => <span className={`${this.props.currentPage === p ? style.selectedPage : ''} ${style.pageNumber}`} onClick={() => this.onPageChanged(p)}>{p} </span>)}
                </div>
                <div>{this.props.users.map(u => <User
                    key={u.id}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} {...u}/>)}</div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button onClick={this.onClickHandler}>Show more</button>
                </div>
            </div>
        );
    }
}

export default Users;