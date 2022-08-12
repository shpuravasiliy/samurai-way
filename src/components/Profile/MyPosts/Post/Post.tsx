import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../assets/images/avatar.png';

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
    avatarImg?: string | null
}

const Post: React.FC<PostPropsType> = (props) => {
    const defaultUserImage = avatar;
    return (
        <div className={s.item}>
            <img
                src={props.avatarImg ? props.avatarImg : defaultUserImage}
                alt="user avatar"
            />
            {props.message}
            <div>
                <span>like ({props.likesCount})</span>
            </div>
        </div>
    );
};

export default Post;