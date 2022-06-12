import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    id: string
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const dialogs = [
    {
        id: '1',
        name: 'Dimych',
        message: 'Hi',
    }, {
        id: '2',
        name: 'Andrey',
        message: 'How is your it-kamasutra?',
    }, {
        id: '3',
        name: 'Sveta',
        message: 'Yo',
    }, {
        id: '4',
        name: 'Sasha',
        message: 'Yo',
    }, {
        id: '5',
        name: 'Victor',
        message: 'Yo',
    }, {
        id: '6',
        name: 'Valera',
        message: 'Yo',
    },

]
const messages = [
    {
        id: '1',
        message: 'Hi',
    }, {
        id: '2',
        message: 'How is your it-kamasutra?',
    }, {
        id: '3',
        message: 'Yo',
    }, {
        id: '4',
        message: 'Yo',
    }, {
        id: '5',
        message: 'Yo',
    }, {
        id: '6',
        message: 'Yo',
    },

]

export const Dialogs = () => {
    const viewDialogs = dialogs.map(d => <DialogItem
        name={d.name}
        id={d.id}
    />);
    const viewMessages = messages.map(m => <Message
        message={m.message}
        id={m.id}
    />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {viewDialogs}
            </div>
            <div className={s.messages}>
                {viewMessages}
            </div>
        </div>
    );
};