import { createSlice } from "@reduxjs/toolkit";
import { categoryReducers } from "./reducers";

const categorySlice = createSlice({
    name:'category slice',
    initialState: {
        value: 0,
        isChoose:[false, true, true, true, true, true]
    },
    reducers: categoryReducers
})

export default categorySlice;
export const actionCategory = categorySlice.actions