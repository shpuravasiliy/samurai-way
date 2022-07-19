import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {RootActionType} from '../../redux/state';

export type ProfilePropsType = {
    myPosts: MyPostsPropsType
    dispatch: (action: RootActionType) => void
}

export type StateProfileType = {
    state: ProfilePropsType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.myPosts.posts} newMessage={props.myPosts.newMessage} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;