import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
import { categoryReducers } from "./reducers";

const categorySlice = createSlice({
    name:'category slice',
    initialState: {
        value: data,
        newData: []
    },
    reducers: categoryReducers
})

export default categorySlice;
export const actionCategory = categorySlice.actions