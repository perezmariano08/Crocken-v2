import { FormButtons, FormWrapper, LoginFormWrapper, LoginWelcomeWrapper, LoginWrapper } from './LoginStyles'
import Logo from '/logo-crocken.png'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button';
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


const Login = () => {
    const dispatch = useDispatch()
    useRedirect('/home')
    return (
        <LoginWrapper>
            <LoginWelcomeWrapper>
                <img src={Logo} alt="Logo Crocken"/>
            </LoginWelcomeWrapper>
            <LoginFormWrapper>
                <FormWrapper>
                    <h4>Iniciar Sesión</h4>
                    <Formik
                        initialValues={loginInitialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={async (values) => {
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
                                <Submit>Ingresar</Submit>
                                <NavLink to={'/register'}>
                                    ¿No tienes cuenta? Registrarse
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