import React, {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {LoginPropsType} from '../Login';

export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
};

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export const LoginForm: FC<LoginPropsType> = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginType>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<LoginType> = data => {
        props.login(data)
    };


    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', {})} style={{display: 'block'}} type={'email'} autoComplete={'username'}/>
        <input {...register('password')} style={{display: 'block'}} type={'password'} autoComplete={'current-password'}/>
        {/*{errors.password && <span>This field is required</span>}*/}
        <p>{errors.password?.message}</p>
        remember me
        <input
            type={'checkbox'}
            {...register('rememberMe')}
            // style={{display: 'block'}}
        />
        <input
            type="submit"
            style={{display: 'block'}}
        />
    </form>;
};