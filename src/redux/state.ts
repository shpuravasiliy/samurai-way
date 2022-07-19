import {ProfilePropsType} from '../components/Profile/Profile';
import {DialogsPropsType} from '../components/Dialogs/Dialogs';
import {SidebarPropsType} from '../components/Navbar/sidebar/Sidebar';
import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';
import {MessagePropsType} from '../components/Dialogs/Message/Message';

export type StateType = {
    profilePage: ProfilePropsType
    dialogsPage: DialogsPropsType
    sidebar: SidebarPropsType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (store: StoreType) => void

    getState: () => StateType
    subscribe: (observer: (store: StoreType) => void) => void

    dispatch: (action: RootActionType) => void
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>
export type sendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyACType = ReturnType<typeof UpdateNewMessageBodyAC>

export type RootActionType = UpdateNewPostTextACType | AddPostACType | sendMessageACType | UpdateNewMessageBodyACType

export const addPostAC = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const UpdateNewPostTextAC = (postMessage: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        postMessage
    } as const
}
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

export let store: StoreType = {
    _state: {
        profilePage: {
            myPosts: {
                posts: [
                    {
                        'id': '1',
                        'message': 'Hi, how are you?',
                        'likesCount': 12,
                    }, {
                        'id': '2',
                        'message': 'It\'s my first post',
                        'likesCount': 11,
                    }, {
                        'id': '3',
                        'message': 'BlaBla',
                        'likesCount': 20,
                    }, {
                        'id': '4',
                        'message': 'Dada',
                        'likesCount': 17,
                    },
                ],
                newMessage: '',
                dispatch: () => {
                },
            },
            dispatch: () => {
            }
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: '1',
                    userName: 'Andrew',
                    userImg: 'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg',
                }, {
                    id: '2',
                    userName: 'Sasha',
                    userImg: 'https://medialeaks.ru/wp-content/uploads/2020/10/rsz_212.jpg',
                }, {
                    id: '3',
                    userName: 'Sveta',
                    userImg: 'https://funart.pro/uploads/posts/2021-07/1627661721_14-funart-pro-p-bolshaya-zelenaya-cherepakha-zhivotnie-kra-19.jpg',
                },
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST': {
                const newPost: PostPropsType = {
                    id: '5',
                    message: this._state.profilePage.myPosts.newMessage,
                    likesCount: 0
                }
                this._state.profilePage.myPosts.posts.push(newPost);
                this._state.profilePage.myPosts.newMessage = '';
                this._callSubscriber(this);
                return this._state;
            }
            case 'UPDATE_NEW_POST_TEXT': {
                this._state.profilePage.myPosts.newMessage = action.postMessage;
                this._callSubscriber(this);
                return this._state;
            }
            case 'ADD_MESSAGE': {
                const newMessage: MessagePropsType = {
                    id: '5',
                    message: this._state.dialogsPage.newMessageBody,
                }
                this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage]
                this._state.dialogsPage.newMessageBody = '';
                this._callSubscriber(this);
                return this._state;
            }
            case 'UPDATE_NEW_MESSAGE_TEXT': {
                this._state.dialogsPage.newMessageBody = action.newMessage;
                this._callSubscriber(this);
                return this._state;
            }
            default:
                return this._state;
        }
    },
}