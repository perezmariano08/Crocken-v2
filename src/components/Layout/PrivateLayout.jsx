import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { PrivateLayoutWrapper } from './PrivateLayoutStyles'

const PrivateLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <PrivateLayoutWrapper>
                {children}
            </PrivateLayoutWrapper>
            <Footer/>
        </>
    )
}

export default PrivateLayout