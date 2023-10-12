import { useDispatch, useSelector } from 'react-redux'
import { ModalCartWrapper, ModalOverlayStyled } from './ModalCartStyles'
import { toggleHiddenCart } from '../../redux/cart/cartSlice'
import { AnimatePresence } from 'framer-motion'

const ModalCart = () => {
    const dispatch = useDispatch()
    const hiddenCart = useSelector((state) => state.cart.hidden)
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
                        <h1 onClick={() => dispatch(toggleHiddenCart())}>X</h1>
                    </ModalCartWrapper>
                        
                    )
                }
            </AnimatePresence>

        </>
        
    )
}

export default ModalCart