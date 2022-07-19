import React from 'react';
import {ProfilePropsType} from '../components/Profile/Profile';
import {DialogsPropsType} from '../components/Dialogs/Dialogs';
import {SidebarPropsType} from '../components/Navbar/sidebar/Sidebar';
import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';

export type StateType = {
    profilePage: ProfilePropsType
    dialogsPage: DialogsPropsType
    sidebar: SidebarPropsType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    onChange: (postMessage: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
}

// let rerenderEntireTree = (state: StateType) => {
//     console.log('State changed');
// }
// export const subscribe = (observer: (state: StateType) => void) => {
//     rerenderEntireTree = observer;
// }
//
// export let state: StateType = {
//     profilePage: {
//         myPosts: {
//             posts: [
//                 {
//                     'id': '1',
//                     'message': 'Hi, how are you?',
//                     'likesCount': 12,
//                 }, {
//                     'id': '2',
//                     'message': 'It\'s my first post',
//                     'likesCount': 11,
//                 }, {
//                     'id': '3',
//                     'message': 'BlaBla',
//                     'likesCount': 20,
//                 }, {
//                     'id': '4',
//                     'message': 'Dada',
//                     'likesCount': 17,
//                 },
//             ],
//             newMessage: '',
//             addPost: () => {},
//             onChange: (postMessage: string) => {},
//         },
//     },
//     dialogsPage: {
//         dialogs: [
//             {
//                 id: '1',
//                 name: 'Dimych',
//             }, {
//                 id: '2',
//                 name: 'Andrey',
//             }, {
//                 id: '3',
//                 name: 'Sveta',
//             }, {
//                 id: '4',
//                 name: 'Sasha',
//             }, {
//                 id: '5',
//                 name: 'Victor',
//             }, {
//                 id: '6',
//                 name: 'Valera',
//             },
//         ],
//         messages: [
//             {
//                 id: '1',
//                 message: 'Hi',
//             }, {
//                 id: '2',
//                 message: 'How is your it-kamasutra?',
//             }, {
//                 id: '3',
//                 message: 'Yo',
//             }, {
//                 id: '4',
//                 message: 'Yo',
//             }, {
//                 id: '5',
//                 message: 'Yo',
//             }, {
//                 id: '6',
//                 message: 'Yo',
//             },
//         ]
//     },
//     sidebar: {
//         friends: [
//             {
//                 id: '1',
//                 userName: 'Andrew',
//                 userImg: 'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg',
//             }, {
//                 id: '2',
//                 userName: 'Sasha',
//                 userImg: 'https://medialeaks.ru/wp-content/uploads/2020/10/rsz_212.jpg',
//             },{
//                 id: '3',
//                 userName: 'Sveta',
//                 userImg: 'https://funart.pro/uploads/posts/2021-07/1627661721_14-funart-pro-p-bolshaya-zelenaya-cherepakha-zhivotnie-kra-19.jpg',
//             },
//         ]
//     }
// }
//
// export const addPost = () => {
//     const newPost: PostPropsType = {
//         id: '5',
//         message: state.profilePage.myPosts.newMessage,
//         likesCount: 0
//     }
//     state.profilePage.myPosts.posts.push(newPost);
//     state.profilePage.myPosts.newMessage = '';
//     rerenderEntireTree(state);
// };
// export const onChange = (postMessage: string) => {
//     state.profilePage.myPosts.newMessage = postMessage;
//     rerenderEntireTree(state);
// };

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
                addPost: () => {
                    store.addPost();
                },
                onChange: (postMessage: string) => {
                    store.onChange(postMessage);
                },
            },
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
            ]
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
    _callSubscriber(state: StateType) {
    },

    addPost() {
        const newPost: PostPropsType = {
            id: '5',
            message: this._state.profilePage.myPosts.newMessage,
            likesCount: 0
        }
        this._state.profilePage.myPosts.posts.push(newPost);
        this._state.profilePage.myPosts.newMessage = '';
        this._callSubscriber(this._state);
    },
    onChange(postMessage: string) {
        this._state.profilePage.myPosts.newMessage = postMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
}