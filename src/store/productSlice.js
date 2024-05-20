import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart : [],
    paraBirim : "₺",
    agirlikBirim : "gr",
    totalPrice : 0,
    order : { productCart : [], totalPrice : 0, orderMessage : "", orderState : { orderType : "primary", orderMessage : "Sipariş Alındı"}}
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addCart: (state,action) => {
            state.cart = [...state.cart, action.payload]
        },
        deleteAllCart: (state) => {
            state.cart = []
        },
        deleteCart: (state,action) => {
            if(state.cart[action.payload].productAmount > 1){
                state.cart[action.payload].productAmount--
            }else{
                state.cart.splice(action.payload, 1)
            }     
        },
        saveTotalPrice : (state,action) => {
            state.totalPrice = action.payload
        },
        order : (state,action) => {
            state.order.productCart = state.cart
            state.order.totalPrice = state.totalPrice
            state.order.orderMessage = action.payload
        },
        saveOrderState : (state,action) => {
            state.order.orderState.orderType = action.payload[0]
            state.order.orderState.orderMessage = action.payload[1]
        }
    }
})

export const { addCart,deleteAllCart,deleteCart, saveTotalPrice, saveOrderState, order, } = productSlice.actions

export default productSlice.reducer