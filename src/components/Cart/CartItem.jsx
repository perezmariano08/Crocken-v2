import React from 'react'
import { CartItem, CartItemCount, CartItemInfo, CartItemInfoBottom, CartItemInfoTop, ImgContainer } from './CartItemStyles'

import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';
import { addItemToCart } from '../../redux/cart/cart-utils';

const CartItems = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state) => state.cart)
    
    return (
        <>
            {
                cartItems.length > 1 ?
                cartItems.map((item) => {
                    const {id, img, title, price, quantity} = item
                    return <CartItem key={id}>
                        <ImgContainer>
                            <img src={`/products/${img}`}/>
                        </ImgContainer>
                    <CartItemInfo>
                        <CartItemInfoTop>
                            <h5>{title}</h5>
                            <HiOutlineTrash onClick={() => dispatch(removeFromCart(id))}/>
                        </CartItemInfoTop>
                        <CartItemInfoBottom>
                            <h5>${price}</h5>
                            <CartItemCount>
                                <span className='but' onClick={() => dispatch(removeFromCart(id))}>-</span>
                                <span>{quantity}</span>
                                <span className='but' onClick={() => dispatch(addToCart({img, title, price, quantity, id}))}>+</span>
                            </CartItemCount>
                        </CartItemInfoBottom>
                    </CartItemInfo>
                    
                </CartItem>
                }) : 'No hay productos en el carrito'
            }
        </>
    )
}

export default CartItems