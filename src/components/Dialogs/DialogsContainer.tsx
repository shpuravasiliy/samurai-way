import React from 'react';
import {sendMessageAC, UpdateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const dialogs = store.getState().dialogsPage.dialogs;
                const messages = store.getState().dialogsPage.messages;
                const newMessageBody = store.getState().dialogsPage.newMessageBody;
                const dispatch = store.dispatch;

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
                )
            }}
        </StoreContext.Consumer>
    );
};