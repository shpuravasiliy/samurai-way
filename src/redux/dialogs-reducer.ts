import {MessagePropsType} from '../components/Dialogs/Message/Message';
import {DialogItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';

export type DialogsInitialStateType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
}

const initialState: DialogsInitialStateType = {
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
}

export type sendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyACType = ReturnType<typeof UpdateNewMessageBodyAC>

type ActionTypes = sendMessageACType | UpdateNewMessageBodyACType

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

const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionTypes): DialogsInitialStateType => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage: MessagePropsType = {
                id: '5',
                message: state.newMessageBody,
            }
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''};
        }
        case 'UPDATE_NEW_MESSAGE_TEXT': {
            return {...state, newMessageBody: action.newMessage};
        }
        default:
            return state;
    }
}

export default dialogsReducer;