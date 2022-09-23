import React from 'react'
import { IInputProps } from '../../../types/common.types'
const Input = (props: IInputProps) => {
    console.log(props);
    
    const fields = props.fields;
    const controller = props.controller
    return (
        <> <label> {props.label}</label>
            <input className='form-control' type={props.type} {...props.register(props.controller, { required: fields.required, minLength: fields.minLength, maxLength: fields.maxLength })}></input>
            {/* {props.errors ? (<b>Please Provide Valid Information</b>):''} */}
            
        
        </>
    )
}

export default Input