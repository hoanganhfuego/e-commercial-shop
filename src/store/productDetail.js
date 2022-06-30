import { createSlice } from "@reduxjs/toolkit";
import { reducersProductDetail } from "./reducers";

export const productDetail = createSlice({
    name: 'product detail',
    initialState: '',
    reducers: reducersProductDetail
})

export const actionProductDetail = productDetail.actions