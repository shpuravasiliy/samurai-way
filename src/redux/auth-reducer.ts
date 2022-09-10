import {AnyAction} from 'redux';
import {authAPI} from '../api/api';
import {changeProfileEntityStatusAC, getProfile, RequestStatusType} from './profile-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';

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

type ActionsType = setAuthUserDataACType | changeAuthEntityStatusACType

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

export const getAuthStatus = () => (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    dispatch(changeAuthEntityStatus('loading'))
    authAPI.getAuthStatus()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(res.data))
                dispatch(changeAuthEntityStatus('succeeded'))
            } else {
                new Error('You not login yet')
            }
            return res.data.id
        })
        .then((res) => res && dispatch(getProfile(res)))
}

const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
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