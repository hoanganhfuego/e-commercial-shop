import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import cartSlice from './cartSlice'
import seenProduct from "./seenProduct";
import { productDetail } from "./productDetail";
import asideSlice from "./asideSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        dataProduct: dataSlice.reducer,
        cart: cartSlice.reducer,
        seenProduct: seenProduct.reducer,
        productDetail: productDetail.reducer,
        asideSlice: asideSlice.reducer,
        categorySlice: categorySlice.reducer,
    }
})
export default store;