import React from 'react'
import { IResetPasswordProps } from '../types/resetPassword.types'
import Input from './layout/form-controls/Input'
const ResetPassword = (props: IResetPasswordProps) => {
    const onResetPasswordHandler = () => {

    }
    return (
        <>
            <form onSubmit={props.handleSubmit(onResetPasswordHandler)}>
                <div className="login-form-control">
                    <Input controller="password" label="Password" type="password" register={props.register} errors={props.errors} fields={{ required: true, minLength: 2, maxLength: 50 }} ></Input>

                </div>

                <div className="login-form-control">
                    <Input controller="password" label="Confirm Password" type="password" register={props.register} errors={props.errors} fields={{ required: true, minLength: 2, maxLength: 50 }} ></Input>
                </div>
                <div className="login-form-btn">
                    <button className="btn-default" type="submit">Reset Password</button>
                </div>
            </form>
        </>
    )
}

export default ResetPassword