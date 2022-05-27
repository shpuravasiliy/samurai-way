import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img
                        className={s.profileImg}
                        src="profileHeader.png"
                        alt="Image Social network"
                    />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;