export type initialStateType = {
    id: number | null,
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export type setAuthUserDataACType = ReturnType<typeof setAuthUserData>

type ActionsType = setAuthUserDataACType

export const setAuthUserData = ({id, email, login}: initialStateType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id, email, login,
        }
    } as const
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
        default:
            return state;
    }
}

export default authReducer;