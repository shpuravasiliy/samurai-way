import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    const defaultUserImage = 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png';
    return (
        <div className={s.item}>
            <img
                src={defaultUserImage}
                alt=""
            />
            {props.message}
            <div>
                <span>like ({props.likesCount})</span>
            </div>
        </div>
    );
};

export default Post;