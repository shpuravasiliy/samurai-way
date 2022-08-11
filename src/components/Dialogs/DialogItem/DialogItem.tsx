import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';

export type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path = '/dialogs/' + props.id;
    const defaultUserImage = avatar;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img
                src={defaultUserImage}
                alt="User image"
            />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}