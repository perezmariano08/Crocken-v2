import { FormButtons, FormWrapper, LoginFormWrapper, LoginWelcomeText, LoginWelcomeWrapper, LoginWrapper } from './LoginStyles'
import Input from '../../components/UI/Input/Input'
import { Form } from '../Register/RegisterStyles';
import { Formik } from 'formik';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import Submit from '../../components/UI/Submit/Submit';
import { loginUser } from '../../axios/axios-user';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';
import useRedirect from '../../hooks/useRedirect';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useState } from 'react';


const Login = () => {
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
            <LoginWelcomeWrapper>
                <LoginWelcomeText>
                    <img src="./img_login.png" alt="" className='vector' />
                    <h2>Bienvenido/a de nuevo!</h2>
                    <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                </LoginWelcomeText>
            </LoginWelcomeWrapper>
            <LoginFormWrapper>
                <FormWrapper>
                    <h4>Iniciar Sesión</h4>
                    <Formik
                        initialValues={loginInitialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={async (values) => {
                            handleLogin()
                            const user = await loginUser(values.email, values.password)
                            if(user) {
                                dispatch(setCurrentUser({
                                    ...user.usuario,
                                    token: user.token
                                }))
                            }
                        }}
                    >
                        <Form>
                            <Input type="email" name="email" placeholder="Ingrese email"/>
                            <Input type="password" name="password" placeholder="Ingrese contraseña" />
                            <a href="/forgot-password">
                                <span>¿Olvidaste tu contraseña?</span>
                            </a>
                            <FormButtons>
                                <LoadingSpinner loading={loading}/>
                                <Submit>Ingresar</Submit>
                                <NavLink to={'/register'}>
                                    ¿No tienes cuenta?
                                    <span> Registrarse</span>
                                </NavLink>                          
                            </FormButtons>
                        </Form>
                    </Formik>
                    
                </FormWrapper>
            
                
            </LoginFormWrapper>
        </LoginWrapper>
    )
}

export default Login