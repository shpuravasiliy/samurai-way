import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';
import {RootActionType} from '../../../redux/store';

export type MyPostsPropsType = {
    posts: PostPropsType[]
    newMessage: string
    dispatch: (action: RootActionType) => void
}

export type MyPostsPresentPropsType = {
    posts: PostPropsType[]
    newMessage: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPresentPropsType> = (props) => {

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    const viewPosts = props.posts.map(p => <Post
        key={p.id}
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />);

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newMessage}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {viewPosts}
            </div>
        </div>
    );
};

export default MyPosts;