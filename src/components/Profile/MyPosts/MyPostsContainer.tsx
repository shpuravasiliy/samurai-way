import React from 'react';
import {addPostAC, UpdateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';

const MyPostsContainer = () => {

    // const posts = props.store.getState().profilePage.myPosts.posts;
    // const newMessage = props.store.getState().profilePage.myPosts.newMessage;
    // const dispatch = props.store.dispatch;



    return (
        <StoreContext.Consumer>
            {store => {
                const posts = store.getState().profilePage.myPosts.posts;
                const newMessage = store.getState().profilePage.myPosts.newMessage;
                const dispatch = store.dispatch;

                const addPostHandler = () => {
                    dispatch && dispatch(addPostAC());
                }
                const updateNewPostTextHandler = (newPostText: string) => {
                    dispatch && dispatch(UpdateNewPostTextAC(newPostText));
                }

                return(
                <MyPosts
                    addPost={addPostHandler}
                    updateNewPostText={updateNewPostTextHandler}
                    posts={posts}
                    newMessage={newMessage}
                />
                )}}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;