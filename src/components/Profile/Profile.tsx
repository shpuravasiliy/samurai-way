import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

const posts = [
    {
        id: '1',
        message: 'Hi, how are you?',
        likesCount: 15,
    }, {
        id: '2',
        message: 'It\'s my first post',
        likesCount: 20,
    },
]

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={posts}/>
        </div>
    );
};

export default Profile;