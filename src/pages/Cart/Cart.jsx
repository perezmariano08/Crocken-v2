import React from 'react'
import { CartItem, CartItemCount, CartItemInfo, CartItemInfoBottom, CartItemInfoTop, CartPageWrapper, CartWrapper, ImgContainer } from './CartStyles'

import { HiOutlineTrash } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Cart = () => {
    const {cartItems} = useSelector((state) => state.cart)
    return (
        <>
            <CartPageWrapper>
                <h2>Mi carrito</h2>s
                <CartWrapper>
                    {
                        cartItems.map((item) => {
                            const {img, title, price, quantity} = item
                            return <CartItem>
                                <ImgContainer>
                                    <img src={`/products/${img}`}/>
                                </ImgContainer>
                            <CartItemInfo>
                                <CartItemInfoTop>
                                    <h5>{title}</h5>
                                    <HiOutlineTrash/>
                                </CartItemInfoTop>
                                <CartItemInfoBottom>
                                    <h5>${price}</h5>
                                    <CartItemCount>
                                        <span className='but'>-</span>
                                        <span>{quantity}</span>
                                        <span className='but'>+</span>
                                    </CartItemCount>
                                </CartItemInfoBottom>
                            </CartItemInfo>
                            
                        </CartItem>
                        })
                    }
                </CartWrapper>
            </CartPageWrapper>
        </>
        
    )
}

export default Cart