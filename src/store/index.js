import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import cartSlice from './cartSlice'

const store = configureStore({
    reducer: {
        dataProduct: dataSlice.reducer,
        cart: cartSlice.reducer
    }
})
export default store;