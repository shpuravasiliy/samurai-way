import {MessagePropsType} from '../components/Dialogs/Message/Message';
import {DialogsPropsType} from '../components/Dialogs/Dialogs';
import {RootActionType} from './state';

const dialogsReduser = (state: DialogsPropsType, action: RootActionType) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage: MessagePropsType = {
                id: '5',
                message: state.newMessageBody,
            }
            state.messages = [...state.messages, newMessage]
            state.newMessageBody = '';
            return state;
        }
        case 'UPDATE_NEW_MESSAGE_TEXT': {
            state.newMessageBody = action.newMessage;
            return state;
        }
        default:
            return state;
    }
}

export type sendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyACType = ReturnType<typeof UpdateNewMessageBodyAC>

export const sendMessageAC = () => {
    return {
        type: 'ADD_MESSAGE',
    } as const
}
export const UpdateNewMessageBodyAC = (newMessage: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newMessage
    } as const
}

export default dialogsReduser;