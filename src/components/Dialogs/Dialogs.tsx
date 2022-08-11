import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

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