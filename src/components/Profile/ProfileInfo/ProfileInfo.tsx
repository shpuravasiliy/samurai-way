import React from 'react';
import s from './ProfileInfo.module.css';
import profileHeader from '../../../assets/images/profileHeader.png'

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.header}>
                <img
                    src={profileHeader}
                    alt="Profile header"
                />
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};