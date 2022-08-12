import React, {FC} from 'react';
import style from './ProfileInfo.module.css';
import profileHeader from '../../../assets/images/profileHeader.png'
import {contactsProps, profileUserType} from '../../../redux/profile-reducer';
import avatarPlaceholder from '../../../assets/images/avatar.png'

type ProfileInfoPropsType = profileUserType

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
    const placeholderProp = (prop: string | null): string => prop !== null ? prop : 'empty';


    const contactsPlaceholder = (obj: contactsProps | undefined) => {
        const result = []
        if (obj !== undefined) {
            for (const [key, value] of Object.entries(obj)) {
                value !== null && result.push(<div key={key}>{`${key}: ${value}`}</div>)
            }
        }
        return result;
    }

    const contacts = contactsPlaceholder(props.contacts);

    return (
        <div>
            <div className={style.header}>
                <img
                    src={profileHeader}
                    alt="Profile header"
                />
            </div>
            <div className={style.mainBlock}>
                <div>
                    <img
                        src={props.photos?.large ? props.photos.large : avatarPlaceholder}
                        alt="user avatar"
                        className={style.avatarImg}
                    />
                </div>
                <div className={style.description}>
                    <div className={style.name}>
                        <h3>{`${placeholderProp(props.fullName)}`}</h3>
                    </div>
                    {props.aboutMe && <div className={style.about}>{`About me: ${props.aboutMe}`}</div>}
                    {!!contacts.length && <div className={style.contacts}>{contacts}</div>}
                </div>
            </div>
        </div>
    );
};