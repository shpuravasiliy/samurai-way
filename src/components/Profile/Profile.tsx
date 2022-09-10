import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileUserPropsType} from './ProfileContainer';

const Profile: FC<ProfileUserPropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;