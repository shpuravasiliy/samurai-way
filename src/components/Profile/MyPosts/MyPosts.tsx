import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';

export type MyPostsPropsType = {
    posts: PostPropsType[]
    // addPost: (message: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    // const [message, setMessage] = useState<string>('');
    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //   setMessage(e.currentTarget.value);
    // }
    // const onClickHandler = () => {
    //     if (!message.trim()) {
    //         setMessage('');
    //         return;
    //     }
    //   else {
    //         props.addPost(message);
    //         setMessage('')
    //     }
    // }

    const viewPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

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