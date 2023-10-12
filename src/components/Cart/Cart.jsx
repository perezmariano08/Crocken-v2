import React from 'react'
import { CartItem, CartItemCount, CartItemInfo, CartItemInfoBottom, CartItemInfoTop, CartPageWrapper, CartWrapper, ImgContainer } from './CartStyles'

import { HiOutlineTrash } from "react-icons/hi";
import ImgPrueba from '/products/barbacoa.jpg'
import { products } from '../../data/Products';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    return (
        <>
            {
                
            }
            <CartWrapper>
                {
                    cartItems.map((item) => {
                        const {img, name, price} = product
                        return <CartItem>
                            <ImgContainer>
                                <img src={`/products/${img}`}/>
                            </ImgContainer>
                        <CartItemInfo>
                            <CartItemInfoTop>
                                <h5>{name}</h5>
                                <HiOutlineTrash/>
                            </CartItemInfoTop>
                            <CartItemInfoBottom>
                                <h5>${price}</h5>
                                <CartItemCount>
                                    <span className='but'>-</span>
                                    <span>0</span>
                                    <span className='but'>+</span>
                                </CartItemCount>
                            </CartItemInfoBottom>
                        </CartItemInfo>
                        
                    </CartItem>
                    })
                }
            </CartWrapper>
        </>
    )
}

export default Cart