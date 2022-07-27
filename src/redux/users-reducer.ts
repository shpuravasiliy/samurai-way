export type userType = {
    id: string
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
    avatar: string
    followed: boolean
}
export type UsersInitialStateType = {
    usersPage: userType[]
}

const initialState: UsersInitialStateType = {
    usersPage: [
        {
            id: '1',
            fullName: 'Dmitry',
            status: 'I am looking for Job right now',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            avatar: 'https://www.blexar.com/avatar.png',
            followed: false,
        },
        {
            id: '2',
            fullName: 'Svetlana',
            status: 'I am so pretty',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            avatar: 'https://www.blexar.com/avatar.png',
            followed: false,
        },
        {
            id: '3',
            fullName: 'Sergei',
            status: 'I like football!',
            location: {
                country: 'Ukraine',
                city: 'Kiev',
            },
            avatar: 'https://www.blexar.com/avatar.png',
            followed: true,
        },
        {
            id: '4',
            fullName: 'Andrew',
            status: 'I am free  to help you to create good Video Production',
            location: {
                country: 'USA',
                city: 'New-York',
            },
            avatar: 'https://www.blexar.com/avatar.png',
            followed: true,
        },
    ]
}

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

type ActionsType = followACType | unfollowACType | setUsersACType

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}
export const setUsersAC = (users: userType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                usersPage: state.usersPage.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            };
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                usersPage: state.usersPage.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            };
        }
        case 'SET-USERS': {
            return {
                ...state,
                usersPage: [...state.usersPage, ...action.payload.users]
            };
        }
        default:
            return state;
    }
}

export default usersReducer;