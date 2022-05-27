import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;