import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likeCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png'
                alt=""
            />
            {props.message}
            <div>
                <span>like ({props.likeCount})</span>
            </div>
        </div>
    );
};

export default Post;