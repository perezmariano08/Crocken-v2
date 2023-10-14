import React from 'react'
import { CartItem, CartItemCount, CartItemInfo, CartItemInfoBottom, CartItemInfoTop, CartPageWrapper, CartWrapper, ImgContainer } from './CartStyles'

import { HiOutlineTrash } from "react-icons/hi";
import { useSelector } from 'react-redux';
import CartItems from '../../components/Cart/CartItem';

const Cart = () => {
    const {cartItems} = useSelector((state) => state.cart)
    return (
        <>
            <CartPageWrapper>
                <h2>Mi carrito</h2>
                <CartWrapper>
                    <CartItems/>
                </CartWrapper>
            </CartPageWrapper>
        </>
        
    )
}

export default Cart