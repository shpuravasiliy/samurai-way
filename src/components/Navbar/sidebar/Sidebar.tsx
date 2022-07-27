import React from 'react';
import s from './Sidebar.module.css'
import {SidebarPropsType} from './SidebarContainer';
import {friendsType} from '../../../redux/sidebar-reducer';

const Sidebar: React.FC<SidebarPropsType> = (props) => {
    const viewSidebar = props.friends.map(f => {
        return (
            <Friend
                key={f.id}
                id={f.id}
                userName={f.userName}
                userImg={f.userImg}
            />
        )
    })
    return (
        <div className={s.sidebar}>
            <h2>Friends</h2>
            <div className={s.friends}>{viewSidebar}</div>
        </div>
    );
};

const Friend: React.FC<friendsType> = (props) => {
    return (
        <div
            key={props.id}
            className={s.friend}
        >
            <div><img
                src={props.userImg}
                alt=""
            /></div>
            <div className={s.friendName}>{props.userName}</div>
        </div>)
}

export default Sidebar;