import React from 'react';
import s from './Profile.module.css';
import {MyPostsPropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {RootActionType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StoreType} from '../../index';
import {ContainerPropsType} from '../../App';

export type ProfilePropsType = {
    myPosts: MyPostsPropsType
    dispatch: (action: RootActionType) => void
}


const Profile: React.FC<ContainerPropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                // posts={props.myPosts.posts}
                // newMessage={props.myPosts.newMessage}
                // dispatch={props.dispatch}
                store={props.store}
            />
        </div>
    );
};

export default Profile;