import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';
import {ProfilePropsType} from '../components/Profile/Profile';
import {RootActionType} from './store';

const initialState: ProfilePropsType = {
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
}

const profileReducer = (state: ProfilePropsType = initialState, action: RootActionType) => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostPropsType = {
                id: '5',
                message: state.myPosts.newMessage,
                likesCount: 0
            }
            state.myPosts.posts.push(newPost);
            state.myPosts.newMessage = '';
            return state;
        }
        case 'UPDATE_NEW_POST_TEXT': {
            state.myPosts.newMessage = action.postMessage;
            return state;
        }
        default:
            return state;
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>

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

export default profileReducer;