import axios from 'axios';
import {userType} from '../redux/users-reducer';
import {profileUserType, statusUserType, stringOrNullType} from '../redux/profile-reducer';
import {initialStateType} from '../redux/auth-reducer';
import {LoginType} from '../components/Login/LoginForm/LoginForm';

type ResponseUserType = {
    items: userType[]
    totalCount: number
    error: string
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '45c43e5d-ea43-44f4-ad72-48e4a0546faa',
    },
})

export const usersAPI = {
    getUsers(pageSize: number, pageNumber: number) {
        return instance.get<ResponseUserType>(`users?count=${pageSize}&page=${pageNumber}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
}
export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<profileUserType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number | null) {
        return instance.get<statusUserType>(`/profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: stringOrNullType) {
        return instance.put<ResponseType>(`/profile/status`, {status})
            .then(res => res.data)
    },
}
export const authAPI = {
    getAuthStatus() {
        return instance.get<ResponseType<initialStateType>>(`auth/me`)
            .then(res => res.data)
    },
    login(data: LoginType) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, data)
            .then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data)
    },
}