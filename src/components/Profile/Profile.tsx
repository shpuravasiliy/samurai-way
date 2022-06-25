import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
    myPosts: MyPostsPropsType
}

export type StateProfileType = {
    state: {
        myPosts: MyPostsPropsType
    }
}

const Profile: React.FC<StateProfileType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts {...props.state.myPosts}/>
        </div>
    );
};

export default Profile;