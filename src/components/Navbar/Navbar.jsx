import { IconCart, IconUser, IconsContainer, ItemContainerStyled, LinksContainerStyled, ModalNavbar, NavLinkStyled, NavbarBottomContainerStyled, NavbarIconoWrapper, NavbarLogo, NavbarLogoWrapper, NavbarNavigateWrapper, NavbarWrapper } from './NavbarStyles'

// Logo
import LogoNavbar from '/logo-crocken.png'
import IconoNavbar from '/icono-crocken.png'

// Iconos
import {HiShoppingCart,HiOutlineUser, HiOutlineHome,HiOutlineMenu,HiOutlineShoppingCart,HiUser,HiOutlineViewGrid, HiOutlineClipboardList, HiHeart} from 'react-icons/hi'

import {useDispatch, useSelector} from 'react-redux'

import { motion} from 'framer-motion'
import ModalCart from '../ModalCart/ModalCart'
import { toggleHiddenCart } from '../../redux/cart/cartSlice'
import ModalUser from './ModalUser/ModalUser'
import { useNavigate } from 'react-router-dom'
import { toggleHiddenMenu } from '../../redux/user/userSlice'
const Navbar = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    const {currentUser, hiddenMenu} = useSelector((state)  => state.user)
    return (
        <>
            <NavbarWrapper>
                <NavbarNavigateWrapper>
                    <NavbarLogoWrapper whileTap={{scale: .95}} href='/home' >
                        <NavbarLogo src={ LogoNavbar } alt="Logo Crocken"  />
                    </NavbarLogoWrapper>
                    <NavbarIconoWrapper whileTap={{scale: .95}} href='/home'>
                        <NavbarLogo src={ IconoNavbar } alt="Logo Crocken"  />
                    </NavbarIconoWrapper>
                    <LinksContainerStyled>
                        <li><NavLinkStyled to="/home">Inicio</NavLinkStyled></li>
                        <li><NavLinkStyled to="/products">Menú</NavLinkStyled></li>
                        <li><NavLinkStyled to="/about-us">Nosotros</NavLinkStyled></li>
                        <li><NavLinkStyled to="/contact">Contacto</NavLinkStyled></li>
                    </LinksContainerStyled>  
                </NavbarNavigateWrapper>
                <IconsContainer>
                        <IconUser onClick={() => {
                            currentUser ?
                            dispatch(toggleHiddenMenu()) :
                            navigate('/login')}
                        }
                        >
                            <span>
                                {
                                    currentUser ? `Hola ${currentUser.nombre}` :
                                    "Iniciar Sesion"
                                }
                            </span>
                            <HiOutlineUser/>
                        </IconUser>
                    <NavLinkStyled>
                        <IconCart onClick={() => dispatch(toggleHiddenCart())}>
                            <HiOutlineShoppingCart/>
                            <span>{totalCartItems}</span>
                        </IconCart>
                    </NavLinkStyled>
                </IconsContainer>
                <ModalCart/>
                <ModalNavbar/>
                <ModalUser/>
            </NavbarWrapper>
            <NavbarBottomContainerStyled>
                <ItemContainerStyled to="/home" whileTap={{scale: .98}}>
                    <HiOutlineHome/>
                    inicio
                </ItemContainerStyled>
                <ItemContainerStyled to="/products" whileTap={{scale: .98}}>
                    <HiOutlineViewGrid/>
                    menú
                </ItemContainerStyled>
                <ItemContainerStyled to="/cart" whileTap={{scale: .98}}>
                    <HiShoppingCart/>
                    Mi carrito
                </ItemContainerStyled>
                <ItemContainerStyled to="/user" whileTap={{scale: .98}}>
                    <HiUser/>
                    Mi cuenta
                </ItemContainerStyled>
            </NavbarBottomContainerStyled>
            
        </>
        

        
    )
}

export default Navbar