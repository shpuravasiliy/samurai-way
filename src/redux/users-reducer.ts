export type userType = {
    id: number
    name: string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
}

export type ServerResponseUsersType = {
    items: userType[]
    totalCount: number
    error: boolean
}

export type UsersInitialStateType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type setIsFetchingACType = ReturnType<typeof toggleFetchingAC>

type ActionsType = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType | setIsFetchingACType

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unfollowAC = (userID: number) => {
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
export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}
export const setTotalUsersCountAC = (TotalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            TotalUsersCount
        }
    } as const
}
export const toggleFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            };
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            };
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...action.payload.users]
            };
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.payload.pageNumber
            };
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.payload.TotalUsersCount
            };
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.payload.isFetching
            };
        }
        default:
            return state;
    }
}

export default usersReducer;