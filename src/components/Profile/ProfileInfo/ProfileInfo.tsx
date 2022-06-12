import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.header}>
                <img
                    src="https://spottingit.com/wp-content/uploads/2018/11/Social-networks-are-a-reality-that-every-company-must-know-how-to-manage-in-a-very-personalized-way.jpg"
                    alt="Social network"
                />
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};