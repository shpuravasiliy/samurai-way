import React from 'react';
import {userType} from '../../../redux/users-reducer';
import style from './User.module.css'

type UserPropsType = userType & {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}

const User: React.FC<UserPropsType> = ({id, status, avatar, followed, fullName, location, follow, unfollow}) => {

    const onClickHandler = () => {
      followed ? unfollow(id) : follow(id);
    }

    return (
        <div className={style.main}>
            <div className={style.avatarSide}>
                <img
                    className={style.avatarImg}
                    src={avatar}
                    alt={'avatar'}
                />
                <button className={style.button} onClick={onClickHandler}>{followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={style.body}>
                <div className={style.statusSide}>
                    <div className={style.name}>{fullName}</div>
                    <div>{status}</div>
                </div>
                <div className={style.locationSide}>
                    {
                        `${location.country}, \n ${location.city}`
                    }
                </div>
            </div>
        </div>
    );
};

export default User;