import React from 'react';
import {addPostAC, UpdateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {ContainerPropsType} from '../../../App';

const MyPostsContainer: React.FC<ContainerPropsType> = (props) => {

    const posts = props.store.getState().profilePage.myPosts.posts;
    const newMessage = props.store.getState().profilePage.myPosts.newMessage;
    const dispatch = props.store.dispatch;

    const addPostHandler = () => {
        dispatch(addPostAC());
    }
    const updateNewPostTextHandler = (newPostText: string) => {
        dispatch(UpdateNewPostTextAC(newPostText));
    }

    return (
        <MyPosts
            addPost={addPostHandler}
            updateNewPostText={updateNewPostTextHandler}
            posts={posts}
            newMessage={newMessage}
        />
    );
};

export default MyPostsContainer;