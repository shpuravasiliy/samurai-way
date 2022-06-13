import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path = '/dialogs/' + props.id;
    const defaultUserImage = 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png';
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img
                src={defaultUserImage}
                alt="UserImage"
            />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}