// import profileReducer, {AddPostACType, UpdateNewPostTextACType} from './profile-reducer';
// import dialogsReducer, {sendMessageACType, UpdateNewMessageBodyACType} from './dialogs-reducer';
// import sidebarReducer from './sidebar-reducer';
//
// type StateType = {
//     profilePage: ProfilePropsType
//     dialogsPage: DialogsPropsType
//     sidebar: SidebarPropsType
// }
// type StoreType = {
//     _state: StateType
//     _callSubscriber: (store: StoreType) => void
//
//     getState: () => StateType
//     subscribe: (observer: (store: StoreType) => void) => void
//
//     dispatch: (action: RootActionType) => void
// }
// type RootActionType = UpdateNewPostTextACType | AddPostACType | sendMessageACType | UpdateNewMessageBodyACType
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             myPosts: {
//                 posts: [
//                     {
//                         'id': '1',
//                         'message': 'Hi, how are you?',
//                         'likesCount': 12,
//                     }, {
//                         'id': '2',
//                         'message': 'It\'s my first post',
//                         'likesCount': 11,
//                     }, {
//                         'id': '3',
//                         'message': 'BlaBla',
//                         'likesCount': 20,
//                     }, {
//                         'id': '4',
//                         'message': 'Dada',
//                         'likesCount': 17,
//                     },
//                 ],
//                 newMessage: '',
//                 dispatch: () => {
//                 },
//             },
//             dispatch: () => {}
//         },
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: '1',
//                     name: 'Dimych',
//                 }, {
//                     id: '2',
//                     name: 'Andrey',
//                 }, {
//                     id: '3',
//                     name: 'Sveta',
//                 }, {
//                     id: '4',
//                     name: 'Sasha',
//                 }, {
//                     id: '5',
//                     name: 'Victor',
//                 }, {
//                     id: '6',
//                     name: 'Valera',
//                 },
//             ],
//             messages: [
//                 {
//                     id: '1',
//                     message: 'Hi',
//                 }, {
//                     id: '2',
//                     message: 'How is your it-kamasutra?',
//                 }, {
//                     id: '3',
//                     message: 'Yo',
//                 }, {
//                     id: '4',
//                     message: 'Yo',
//                 }, {
//                     id: '5',
//                     message: 'Yo',
//                 }, {
//                     id: '6',
//                     message: 'Yo',
//                 },
//             ],
//             newMessageBody: '',
//             dispatch: () => {},
//         },
//         sidebar: {
//             friends: [
//                 {
//                     id: '1',
//                     userName: 'Andrew',
//                     userImg: 'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg',
//                 }, {
//                     id: '2',
//                     userName: 'Sasha',
//                     userImg: 'https://medialeaks.ru/wp-content/uploads/2020/10/rsz_212.jpg',
//                 }, {
//                     id: '3',
//                     userName: 'Sveta',
//                     userImg: 'https://funart.pro/uploads/posts/2021-07/1627661721_14-funart-pro-p-bolshaya-zelenaya-cherepakha-zhivotnie-kra-19.jpg',
//                 },
//             ],
//             dispatch: () => {},
//         }
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._callSubscriber(this);
//     },
// }

export default 1;