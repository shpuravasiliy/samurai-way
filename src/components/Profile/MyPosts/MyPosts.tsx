import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';
import { RootActionType } from '../../../redux/store';
import {addPostAC, UpdateNewPostTextAC} from '../../../redux/profile-reducer';

export type MyPostsPropsType = {
    posts: PostPropsType[]
    newMessage: string
    dispatch: (action: RootActionType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onClickHandler = () => {
        props.dispatch(addPostAC());
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewPostTextAC(e.currentTarget.value));
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
                        onChange={onChangeHandler}
                        value={props.newMessage}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {viewPosts}
            </div>
        </div>
    );
};

export default MyPosts;