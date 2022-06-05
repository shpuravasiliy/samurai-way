import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
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
                <MyPosts />
            </div>
        </div>
    );
};

export default Profile;