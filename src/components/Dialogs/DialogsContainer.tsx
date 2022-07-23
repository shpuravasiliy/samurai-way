import React from 'react';
import {sendMessageAC, UpdateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {ContainerPropsType} from '../../App';
import {Dialogs} from './Dialogs';

export const DialogsContainer: React.FC<ContainerPropsType> = (props) => {

    const dialogs = props.store.getState().dialogsPage.dialogs;
    const messages = props.store.getState().dialogsPage.messages;
    const newMessageBody = props.store.getState().dialogsPage.newMessageBody;
    const dispatch = props.store.dispatch;

    const sendMessageHandler = () => {
        dispatch(sendMessageAC());
    };
    const updateNewMessageBodyHandler = (newMessageBody: string) => {
        dispatch(UpdateNewMessageBodyAC(newMessageBody));
    };

    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            newMessageBody={newMessageBody}
            sendMessage={sendMessageHandler}
            updateNewMessageBody={updateNewMessageBodyHandler}
        />
    );
};