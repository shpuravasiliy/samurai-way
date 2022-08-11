import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {profileUserType} from '../../redux/profile-reducer';

type ProfilePropsType = profileUserType

const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;