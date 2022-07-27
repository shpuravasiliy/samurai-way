import React from 'react';
import {UsersPropsType} from './UsersContainer';
import User from './User/User';
import {userType} from '../../redux/users-reducer';

const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {
    
    const onClickHandler = () => {
        const newUsers: userType[] = [
            {
                id: '1' + Date.now(),
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
                id: '2' + Date.now(),
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
                id: '3' + Date.now(),
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
                id: '4' + Date.now(),
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
        setUsers(newUsers)
    }
    
    return (
        <div>
            <div>{usersPage.map(u => <User key={u.id} follow={follow} unfollow={unfollow} {...u}/>)}</div>
            <div style={{justifyContent: 'center'}}>
                <button onClick={onClickHandler}>Show more</button>
            </div>
        </div>
    );
};

export default Users;