import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {RootActionType} from '../../redux/store';

export type ProfilePropsType = {
    myPosts: MyPostsPropsType
    dispatch: (action: RootActionType) => void
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