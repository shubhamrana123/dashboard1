
import React from 'react'
import ResetPassword from '../component/ResetPassword'
import { useForm } from 'react-hook-form';
import Images from '../constant/images';
const ResetPasswordView = () => {
    const {register,formState:{errors},getValues,control,handleSubmit,setError} = useForm()
    const onResetPasswordHandler = () =>{

    }
  return (
<div className="login-page">
    <div className="login-body">
        <div className="login-body-inner">
        <div className="login-logo"><img src={Images.logoIcon} /></div>
        <div className="login-title">Reset Your Password</div>
        {/* <ResetPassword onResetPasswordHandler={onResetPasswordHandler} errors ={errors} control = {control} getValues = {getValues} handleSubmit = {handleSubmit} register ={register} setError ={setError}/> */}
        </div>
    </div>
</div>
  )
}

export default ResetPasswordView