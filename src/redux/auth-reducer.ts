import {AnyAction} from 'redux';
import {authAPI} from '../api/api';
import {getProfile, RequestStatusType} from './profile-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {LoginType} from '../components/Login/LoginForm/LoginForm';

export type initialStateType = {
    id: number | null,
    login: string | null
    email: string | null
    isAuth: boolean
    entityStatus: RequestStatusType
}

const initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    entityStatus: 'idle',
}

export type setAuthUserDataACType = ReturnType<typeof setAuthUserData>
export type changeAuthEntityStatusACType = ReturnType<typeof changeAuthEntityStatus>
export type changeAuthStatusACType = ReturnType<typeof changeAuthStatus>

type ActionsType = setAuthUserDataACType | changeAuthEntityStatusACType | changeAuthStatusACType

export const setAuthUserData = ({id, email, login}: initialStateType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id, email, login,
        }
    } as const
}
export const changeAuthEntityStatus = (entityStatus: RequestStatusType) => {
    return {
        type: 'CHANGE-AUTH-ENTITY-STATUS',
        payload: {entityStatus}
    } as const
}
export const changeAuthStatus = (status: boolean) => {
    return {
        type: 'CHANGE-AUTH-STATUS',
        payload: {status}
    } as const
}

export const getAuthStatus = () => (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    dispatch(changeAuthEntityStatus('loading'))
    authAPI.getAuthStatus()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(res.data))
                dispatch(changeAuthStatus(true))
            } else {
                new Error('You not login yet')
            }
            return res.data.id
        })
        .then((res) => res && dispatch(getProfile(res)))
        .finally(() => dispatch(changeAuthEntityStatus('succeeded')))
}
export const login = (data: LoginType) => (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    authAPI.login(data)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuthStatus())
            }
        })
}
export const logout = () => (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(changeAuthStatus(false))
            }
        })
}

const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.payload,
            };
        }
        case 'CHANGE-AUTH-STATUS': {
            return {
                ...state,
                isAuth: action.payload.status,
            };
        }
        case 'CHANGE-AUTH-ENTITY-STATUS': {
            return {
                ...state,
                entityStatus: action.payload.entityStatus,
            };
        }
        default:
            return state;
    }
}

export default authReducer;