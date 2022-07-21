import React from 'react';
import s from './Sidebar.module.css'
import {RootActionType} from '../../../redux/store';

export type SidebarPropsType = {
    friends: FriendsPropsType[]
    dispatch: (action: RootActionType) => void
}

export type FriendsPropsType = {
    id: string
    userName: string
    userImg: string
}

const Sidebar: React.FC<SidebarPropsType> = (props) => {
    const viewSidebar = props.friends.map(f => {
        return (
            <Friend key={f.id} id={f.id} userName={f.userName} userImg={f.userImg}/>
        )
    })
    return (
        <div className={s.sidebar}>
            <h2>Friends</h2>
            <div className={s.friends}>{viewSidebar}</div>
        </div>
    );
};

const Friend: React.FC<FriendsPropsType> = (props) => {
    return (
        <div key={props.id} className={s.friend}>
            <div><img src={props.userImg} alt=""/></div>
            <div className={s.friendName}>{props.userName}</div>
        </div>)
}
export default Sidebar;