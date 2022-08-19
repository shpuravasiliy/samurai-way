import React from 'react';
import {userType} from '../../../redux/users-reducer';
import style from './User.module.css'
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

type UserPropsType = userType & {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: number[]
}

const User: React.FC<UserPropsType> = ({
                                           id,
                                           status,
                                           photos: {small: avatar, large},
                                           followed,
                                           follow,
                                           unfollow,
                                           name: fullName,
                                           followingInProgress
                                       }) => {

    const onClickHandler = () => {
        followed ? unfollow(id) : follow(id);
    }

    return (
        <div className={style.main}>
            <div className={style.avatarSide}>
                <NavLink to={'/profile/' + id}>
                    <img
                        className={style.avatarImg}
                        src={avatar ? avatar : userPhoto}
                        alt={'avatar'}
                    />
                </NavLink>
                <button
                    disabled={followingInProgress.some(f => f === id)}
                    className={style.button}
                    onClick={onClickHandler}
                >{followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={style.body}>
                <div className={style.statusSide}>
                    <div className={style.name}>
                        <NavLink to={'/profile/' + id}>
                            {fullName}
                        </NavLink>
                    </div>

                    <div>{status ? status : 'I haven\'t status for now'}</div>
                </div>
                <div className={style.locationSide}>

                </div>
            </div>
        </div>
    );
};

export default User;