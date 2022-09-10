import React, {FC} from 'react';
import {UsersPropsType} from './UsersContainer';
import User from './User/User';
import style from './Users.module.css'

type UsersAPIPropsType = {
    changePageNumber: (pageNumber: number) => void
    onClickButtonHandler: () => void
    toggleFollowingInProgress: (isFetching: boolean, userID: number) => void

}

type UsersPresentPropsType = UsersPropsType & UsersAPIPropsType

const Users: FC<UsersPresentPropsType> = (props) => {

    const onClickButtonHandler = () => {
        props.onClickButtonHandler();
    }
    const onPageChanged = (pageNumber: number) => {
        props.changePageNumber(pageNumber);
    }

    const followHandler = (userId: number) => {
        props.follow(userId)
    }
    const unfollowHandler = (userId: number) => {
        props.unfollow(userId)
    }

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    const showPages = pagesCount > 5 ? props.currentPage <= 3 ? pages.slice(0, 5) : pages.slice(props.currentPage - 3, props.currentPage + 2) : pages

    return (
        <div>
            <div>
                {showPages.map(p => <span
                    className={`${props.currentPage === p ? style.selectedPage : ''} ${style.pageNumber}`}
                    onClick={() => onPageChanged(p)}
                    key={p}
                >{p} </span>)}
            </div>
            <div>{props.users.map(u => <User
                key={u.id}
                follow={followHandler}
                unfollow={unfollowHandler}
                followingInProgress={props.followingInProgress}
                {...u}/>)}</div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={onClickButtonHandler}>Show next page</button>
            </div>
        </div>
    );
}

export default Users;