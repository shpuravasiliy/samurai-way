import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

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
export type UsersInitialStateType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export type followACType = ReturnType<typeof approveFollow>
export type unfollowACType = ReturnType<typeof approveUnfollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>

type ActionsType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleFollowingInProgressACType

export const approveFollow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const approveUnfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}
export const setUsers = (users: userType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}
export const setTotalUsersCount = (TotalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            TotalUsersCount
        }
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userID: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        payload: {
            isFetching,
            userID
        }
    } as const
}

export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageSize, currentPage)
        .then((res) => {
            dispatch(setUsers(res.items));
            dispatch(setTotalUsersCount(res.totalCount));
            dispatch(toggleIsFetching(false));
        })
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.follow(userId)
        .then((res) => {
            res.resultCode === 0 && dispatch(approveFollow(userId))
            dispatch(toggleFollowingInProgress(false, userId))
        })
}

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersAPI.unfollow(userId)
        .then((res) => {
            res.resultCode === 0 && dispatch(approveUnfollow(userId))
            dispatch(toggleFollowingInProgress(false, userId))
        })
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
        case 'TOGGLE-FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ? [...state.followingInProgress, action.payload.userID] : state.followingInProgress.filter(id => id !== action.payload.userID)
            };
        }
        default:
            return state;
    }
}

export default usersReducer;