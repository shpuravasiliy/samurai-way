import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';

export type DialogsPropsType = {
        dialogs: DialogItemPropsType[]
        messages: MessagePropsType[]
}
export type StateDialogsType = {
    state: {
        dialogs: DialogItemPropsType[]
        messages: MessagePropsType[]
    }
}

export const Dialogs: React.FC<StateDialogsType> = (props) => {
    const viewDialogs = props.state.dialogs.map(d => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />);
    const viewMessages = props.state.messages.map(m => <Message
        key={m.id}
        id={m.id}
        message={m.message}
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