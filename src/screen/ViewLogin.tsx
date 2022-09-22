import { kMaxLength } from 'buffer';
import React from 'react'
import { useForm } from 'react-hook-form';
import Login from '../component/Login';
import Input from '../component/layout/form-controls/Input'
// import { IPhysician } from '../types/physician.type';
import Images from '../constant/images';
import { ICompany } from '../types/company.types';
import ViewCard from '../component/layout/card/Card';

const ViewLogin = () => {
    
    const {register,handleSubmit,getValues,formState:{errors}} = useForm<any>()
    const onLoginHandler = (companyInfo :ICompany) =>{

    }
    return (
        <>

             <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"> 


<div className="login-page">
                <div className="login-body">
                    <div className="login-body-inner">
                    {/* <div className="login-logo"><img src={Images.logoIcon} /></div> */}
                    <Login onLoginHandler={onLoginHandler} errors= {errors} register={register} getValues = {getValues} handleSubmit={handleSubmit}/>
{/* 
                       <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <ViewCard>

                    <div className="login-title">Submit your Data</div>
               
                    <Login onLoginHandler={onLoginHandler} errors= {errors} register={register} getValues = {getValues} handleSubmit={handleSubmit}/>
                    </ViewCard>
                    </div>
                    </div> */}

</div> 
 </div>
</div>

                </div>
            </div>

            </>
            )
     
   
}

export default ViewLogin