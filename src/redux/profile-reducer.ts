import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';
import {MyPostsStateType} from '../components/Profile/MyPosts/MyPosts';

type stringOrNullType = string | null
export type contactsProps = {
    facebook: stringOrNullType,
    website: stringOrNullType,
    vk: stringOrNullType,
    twitter: stringOrNullType,
    instagram: stringOrNullType,
    youtube: stringOrNullType,
    github: stringOrNullType,
    mainLink: stringOrNullType
}
export type profileUserType = {
    aboutMe: stringOrNullType,
    contacts: contactsProps,
    lookingForAJob: boolean,
    lookingForAJobDescription: stringOrNullType,
    fullName: string,
    userId: number,
    photos: {
        small: stringOrNullType,
        large: stringOrNullType,
    },
}

export type ProfileInitialStateType = {
    myPosts: MyPostsStateType
    profile: profileUserType
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
    profile: {} as profileUserType,
}

export type AddPostACType = ReturnType<typeof addPost>
export type updateNewPostTextACType = ReturnType<typeof updateNewPostText>
export type setUserProfileACType = ReturnType<typeof setUserProfile>

type ActionsType = AddPostACType | updateNewPostTextACType | setUserProfileACType

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
export const setUserProfile = (profile: profileUserType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
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
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.payload.profile};
        }
        default:
            return state;
    }
}

export default profileReducer;