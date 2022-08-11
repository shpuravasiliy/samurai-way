import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';
import {MyPostsStateType} from '../components/Profile/MyPosts/MyPosts';

export type ProfileInitialStateType = {
    myPosts: MyPostsStateType
}

const initialState: ProfileInitialStateType = {
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
    },
}

export type AddPostACType = ReturnType<typeof addPost>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostText>

type ActionsType = AddPostACType | UpdateNewPostTextACType

export const addPost = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const updateNewPostText = (postMessage: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        postMessage
    } as const
}

const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostPropsType = {
                id: '5',
                message: state.myPosts.newMessage,
                likesCount: 0
            }
            return {...state, myPosts: {...state.myPosts, newMessage: '', posts: [...state.myPosts.posts, newPost]}, };
        }
        case 'UPDATE_NEW_POST_TEXT': {
            return {...state, myPosts: {...state.myPosts, newMessage: action.postMessage}};
        }
        default:
            return state;
    }
}

export default profileReducer;