import { createSlice } from "@reduxjs/toolkit";
import { reducersSeenProduct } from "./reducers";

const seenProduct = createSlice({
    initialState: [],
    name: 'seen product',
    reducers: reducersSeenProduct
})

export const actionSeen = seenProduct.actions
export default seenProduct