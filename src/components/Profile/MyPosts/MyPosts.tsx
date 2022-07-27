import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';

export type MyPostsStateType = {
    posts: PostPropsType[]
    newMessage: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    const viewPosts = props.myPostsPage.posts.map(p => <Post
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
                        value={props.myPostsPage.newMessage}
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