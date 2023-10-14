import React, { useState } from 'react'
import { FormButtons, FormWrapper, LoginFormWrapper, LoginWelcomeText, LoginWelcomeWrapper, LoginWrapper } from '../Login/LoginStyles'
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
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const Register = () => {
    const dispatch = useDispatch()
    useRedirect('/home')
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        // Simula una solicitud de inicio de sesión (puedes reemplazarlo con tu lógica).
        setTimeout(() => {
        // Aquí iría tu lógica de inicio de sesión.
        // Después de que se complete el inicio de sesión (o falle), oculta el spinner.
        setLoading(false);
        }, 4000); // Simula una duración de inicio de sesión de 2 segundos.
    };

    return (
        <LoginWrapper>
            <LoginFormWrapper>
            <FormWrapper>
                <h4>Crea tu cuenta</h4>
                <Formik
                    initialValues={registerInitialValues}
                    validationSchema={registerValidationSchema}
                    onSubmit={async (values, actions) => {
                        handleLogin()
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
                            <LoadingSpinner loading={loading}/>
                            <Submit type="button" background="blue-dark">
                                Registrarte
                            </Submit>
                            <NavLink to={'/login'}>
                                ¿Ya tienes cuenta?
                                <span> Inicia Sesión</span></NavLink>
                        </FormButtons>
                    </Form>
                </Formik>
                    
                </FormWrapper>
            </LoginFormWrapper>
            <LoginWelcomeWrapper>
            <LoginWelcomeText>
                    <img src="./img_register.png" alt="" className='vector' />
                    <h2>Te damos la bienvendia a Crocken!</h2>
                    <p>Registrate para disfrutar de nuestros productos, beneficios y más.</p>
                </LoginWelcomeText>
            </LoginWelcomeWrapper>
        </LoginWrapper>
    )
}

export default Register