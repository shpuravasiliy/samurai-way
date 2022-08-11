import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import profileHeader from '../../../assets/images/profileHeader.png'
import {profileUserType} from '../../../redux/profile-reducer';

type ProfileInfoPropsType = profileUserType

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div className={s.header}>
                <img
                    src={profileHeader}
                    alt="Profile header"
                />
            </div>
            <div>
                <img src={props.photos.large ? props.photos.large : ''}
                alt='user avatar'/>
                <div>{`Обо мне: ${props.aboutMe}`}</div>
            </div>
        </div>
    );
};