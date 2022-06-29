import { createSlice } from "@reduxjs/toolkit";
import { reducerCart } from "./reducers";

const cartSlice = createSlice({
    initialState: {
        amount: 0,
        productID: [],
        productADD: false,
        productInfor: [],
        priceAmount: []
    },
    name: 'cart',
    reducers: reducerCart
})

export default cartSlice
export const action = cartSlice.actions