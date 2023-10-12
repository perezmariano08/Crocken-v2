import React from 'react'
import { GlobalInput, InputContainer, InputLabel, InputWrapper } from './InputStyles'
import { ErrorMessage, Field } from 'formik'

const Input = ({type, name, placeholder, onChange, label}) => {
    return (
        <>
            <Field name={name}>
                {
                    ({field, form: {errors, touched} }) => (
                        <InputContainer>
                            <InputWrapper>
                                <GlobalInput 
                                    onChange={onChange} 
                                    type={type} 
                                    name={name} 
                                    placeholder={placeholder}
                                    {...field}
                                />
                                <div className='underline'></div>
                            </InputWrapper>
                            <ErrorMessage name={field.name}>
                                {message => <InputLabel>{message}</InputLabel>}
                            </ErrorMessage>
                            {/*  */}
                        </InputContainer>
                    )
                    
                }
                
            </Field>
            
        </>
        
    )
}

export default Input