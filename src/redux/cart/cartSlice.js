import { createSlice } from "@reduxjs/toolkit"
import { addItemToCart, removeItemFromCart, removeProductFromCart, resetShippingCost } from "./cart-utils"
import { SHIPPING_COST } from "../../utils/constants"

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        //Agregar al carrito
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload ),
                shippingCost: SHIPPING_COST
            }
        },

        //Remover del carrito
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }
        },

        //Limpiar todo el carrito
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0
            } 
        },

        //Limpiar producto del carrito
        removeProduct: (state, action) => {
            return {
                ...state,
                cartItems: removeProductFromCart(state.cartItems, action.payload),
                shippingCost: 0
            } 
        },

        //Toggle de apertura/cierre de carrito
        toggleHiddenCart: (state) => {
            document.body.style.overflow === 'hidden' 
                ? document.body.style.overflow = 'visible' 
                : document.body.style.overflow = 'hidden'
            return {
                ...state,
                hidden: !state.hidden
            }
        }
    }
})

export const {
    addToCart,
    clearCart,
    removeFromCart,
    toggleHiddenCart,
    removeProduct
} = cartSlice.actions;

export default cartSlice.reducer;