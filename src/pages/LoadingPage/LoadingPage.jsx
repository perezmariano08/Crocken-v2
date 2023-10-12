import React, { useEffect } from 'react'
import { LoadingPageWrapper } from './LoadingPageStyles'
import Logo from '/logo-crocken.png'
import {  useNavigate } from 'react-router-dom'; // Importa useHistory


const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simula una carga de datos (reemplaza esto con tu lógica real)
        setTimeout(() => {
            navigate('/login'); // Redirige a la página principal
        }, 3000); // Simula una carga de 2 segundos
    }, [navigate]);
    return (
        <LoadingPageWrapper>
            <img src={Logo} />
        </LoadingPageWrapper>
    )
}

export default LoadingPage