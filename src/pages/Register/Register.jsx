import React from 'react'
import { FormButtons, FormWrapper, LoginFormWrapper, LoginWelcomeWrapper, LoginWrapper } from '../Login/LoginStyles'
import Input from '../../components/UI/Input/Input'
import { Form } from './RegisterStyles'
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import {Formik, useFormik}from 'formik'
import { registerInitialValues } from '../../formik/initialValues'
import { registerValidationSchema } from '../../formik/validationSchema'
import Submit from '../../components/UI/Submit/Submit'
import { createUser } from '../../axios/axios-user'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../../redux/user/userSlice'
import useRedirect from '../../hooks/useRedirect'

const Register = () => {
    const dispatch = useDispatch()
    useRedirect('/home')

    return (
        <LoginWrapper>
            <LoginFormWrapper>
            <FormWrapper>
                <h4>Crea tu cuenta</h4>
                <Formik
                    initialValues={registerInitialValues}
                    validationSchema={registerValidationSchema}
                    onSubmit={async (values, actions) => {
                        const user = await createUser(values.name, values.email, values.password)
                        actions.resetForm()
                        if (user) {
                            dispatch(setCurrentUser({...user.usuario}))
                        }
                    }}
                >
                    
                    <Form>
                        <Input type="text" name="name" placeholder="Ingrese usuario"/>
                        <Input type="email" name="email" placeholder="Ingrese email" />
                        <Input type="password" name="password" placeholder="Ingrese contraseña" />
                        <FormButtons>
                            <Submit type="button">
                                Registrarte
                            </Submit>
                            <NavLink to={'/login'}>Ya tengo cuenta</NavLink>
                        </FormButtons>
                    </Form>
                </Formik>
                    
                </FormWrapper>
            </LoginFormWrapper>
            <LoginWelcomeWrapper>
                
            </LoginWelcomeWrapper>
        </LoginWrapper>
    )
}

export default Register