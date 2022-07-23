import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';
import {RootActionType} from '../../redux/store';

export type DialogsPropsType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
    dispatch: (action: RootActionType) => void
}

export type DialogsPresentPropsType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
    sendMessage: () => void
    updateNewMessageBody: (newMessageBody: string) => void
}

export const Dialogs: React.FC<DialogsPresentPropsType> = (props) => {

    const viewDialogs = props.dialogs.map(d => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />);
    const viewMessages = props.messages.map(m => <Message
        key={m.id}
        id={m.id}
        message={m.message}
    />);

    const onClickHandler = () => {
        props.sendMessage();
    }
    const textareaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {viewDialogs}
            </div>
            <div className={s.messages}>
                {viewMessages}
            </div>
            <div className={s.addMessage}>
                <textarea
                    value={props.newMessageBody}
                    cols={30}
                    rows={1}
                    placeholder={'Type your message'}
                    onChange={textareaOnChangeHandler}
                />
                <button onClick={onClickHandler}>Send</button>
            </div>
        </div>
    );
};