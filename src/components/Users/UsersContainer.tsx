import {connect} from 'react-redux';
import Users from './Users';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType, userType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';

type mapStateToPropsType = UsersInitialStateType
type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: userType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        ...state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)