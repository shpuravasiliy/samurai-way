import {MessagePropsType} from '../components/Dialogs/Message/Message';
import {DialogsPropsType} from '../components/Dialogs/Dialogs';
import {RootActionType} from './store';

const initialState: DialogsPropsType = {
    dialogs: [
        {
            id: '1',
            name: 'Dimych',
        }, {
            id: '2',
            name: 'Andrey',
        }, {
            id: '3',
            name: 'Sveta',
        }, {
            id: '4',
            name: 'Sasha',
        }, {
            id: '5',
            name: 'Victor',
        }, {
            id: '6',
            name: 'Valera',
        },
    ],
    messages: [
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
    ],
    newMessageBody: '',
    dispatch: () => {
    },
}

const dialogsReducer = (state: DialogsPropsType = initialState, action: RootActionType) => {
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

export default dialogsReducer;