import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img
                        className={s.profileImg}
                        src="https://spottingit.com/wp-content/uploads/2018/11/Social-networks-are-a-reality-that-every-company-must-know-how-to-manage-in-a-very-personalized-way.jpg"
                        alt="Social network"
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