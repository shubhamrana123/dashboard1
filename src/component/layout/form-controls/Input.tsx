import React from 'react'
import { IInputProps } from '../../../types/common.types'
const Input = (props: IInputProps) => {
    const fields = props.fields;
    return (
        <>
            <input className='form-control' type={props.type} {...props.register(props.controller, { required: fields.required, minLength: fields.minLength, maxLength: fields.maxLength })}></input>
        </>
    )
}

export default Input