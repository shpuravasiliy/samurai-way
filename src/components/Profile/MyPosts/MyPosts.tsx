import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsPropsType = {
    postsData: PostsType[]
}
type PostsType = {
    id: string
    message: string
    likesCount: number
}

const MyPosts: React.FC<PostsPropsType> = (props) => {
    const viewPosts = props.postsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {viewPosts}
            </div>
        </div>
    );
};

export default MyPosts;