import { useDispatch, useSelector } from 'react-redux'
import { FooterButtons, FooterSubtotal, FooterTotal, Item, ModalCartBody, ModalCartFooter, ModalCartHeader, ModalCartProducts, ModalCartWrapper, ModalOverlayStyled} from './ModalCartStyles'
import { clearCart, toggleHiddenCart } from '../../redux/cart/cartSlice'
import { AnimatePresence } from 'framer-motion'
import Button  from '../../components/UI/Button/Button'
import {IoMdClose} from 'react-icons/io'
import CartItems from '../Cart/CartItem'
import { formatPrice } from '../../utils/formatPrice'

const ModalCart = () => {
    const dispatch = useDispatch()
    const hiddenCart = useSelector((state) => state.cart.hidden)
    const {cartItems} = useSelector((state) => state.cart)
    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity)
    }, 0);
    return (
        <>
            {!hiddenCart && (
                    <ModalOverlayStyled
                        onClick={() => dispatch(toggleHiddenCart())}
                        isHidden={hiddenCart}
                    />
                )
            }
            <AnimatePresence>
                {!hiddenCart && (
                    <ModalCartWrapper
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="cart-modal"
                    >
                        <ModalCartHeader>
                            <span>Mi carrito</span>
                            <IoMdClose onClick={() => dispatch(toggleHiddenCart())}/>
                        </ModalCartHeader>
                        <ModalCartBody>
                            <ModalCartProducts>
                                <CartItems/>
                            </ModalCartProducts>

                            
                        </ModalCartBody>
                        <ModalCartFooter>
                            <FooterSubtotal>
                                <span>Subtotal:</span>
                                <span>$ {formatPrice(totalPrice)}</span>
                            </FooterSubtotal>
                            <FooterTotal>
                                <span>Total:</span>
                                <span>$ {formatPrice(totalPrice)}</span>
                            </FooterTotal>
                            <FooterButtons>
                                <Button background={'blue-gradient'} 
                                    disabled={cartItems.length === 0}>
                                    Comprar
                                </Button>
                                <Button background={'orange-gradient'}
                                    onClick={() => dispatch(clearCart())}
                                    disabled={cartItems.length === 0}
                                >
                                    Vaciar carrito
                                </Button>
                            </FooterButtons>
                            
                        </ModalCartFooter>
                    </ModalCartWrapper>
                        
                    )
                }
            </AnimatePresence>

        </>
        
    )
}

export default ModalCart