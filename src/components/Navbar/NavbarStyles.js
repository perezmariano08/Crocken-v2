import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

export const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: var(--blue-dark);
    color: var(--100);

    @media (max-width: 768px) {
        height: 50px;
        justify-content: center;
        padding: 0;        
    }
    
`

export const NavbarNavigateWrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 40px;
    height: 100%;


    .iconoNavbar {
        display: none;
    } 
    
    @media (max-width: 768px) {

        .iconoNavbar {
            display: flex;
        }

        .logoNavbar {
            display: none;
        }

    }
`

export const NavbarLogoWrapper = styled(motion.a)`
    height: 50%;
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`

export const NavbarIconoWrapper = styled(NavbarLogoWrapper)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`

export const NavbarLogo = styled.img`
    height: 100%;
`

export const LinksContainerStyled = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    > li a {
        font-weight: 200;
    }

    

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavLinkStyled = styled(NavLink)`
    font-weight: 200;
    color: var(--100);

    &.active {
        font-weight: 400;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    a {
        color: var(--100);
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const IconUser = styled.div`
    cursor: pointer;
    padding: 6px 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--100);
    font-weight: 200;

    span {
        font-size: 12px
    }
`

export const IconCart = styled.div`
    background: var(--orange-gradient);
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--100);
    font-weight: 200;

    span {
        font-size: 12px
    }
`

// Navbar Responsive
export const NavbarBottomContainerStyled = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: none;
    padding: 10px 25px;
    border-radius: 15px 15px 0 0;
    justify-content: space-between;
    align-items: center;
    background-color: var(--100);
    color: var(--blue-dark);
    box-shadow: 0px 6px 24px 5px rgba(0,0,0,0.1);
    font-weight: 400;
    font-size: 10px;
    z-index: 99;

    @media (max-width: 768px) {
        display: flex;
    }
`

export const ItemContainerStyled = styled(motion(NavLink))`
    display: flex;
    min-width: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--blue-dark);
    gap: 5px;
    cursor: none;

    svg {
        font-size: 1.5rem;
    }

    &.active {
        color: var(--orange)
    }
`

export const IconCartContainer = styled.div`
    background-color: var(--orange);
    color: var(--100);
    height: fit-content;
    padding: 8px 10px;
    border-radius: 15px;
    svg {
        font-size: 1.5rem;
    }
`

export const ModalNavbar = styled.div`
    position: absolute;
    top: 100px;
    right: 20px;
    background-color: var(--pink);
    height: 200px;
    width: 200px;
    display: none;
`