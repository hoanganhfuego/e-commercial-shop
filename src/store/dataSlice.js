import { createSlice } from "@reduxjs/toolkit"
import { reducers } from "./reducers";
import data from "../data";

const dataSlice = createSlice({
    initialState: data,
    name :'data',
    reducers : reducers
})
export const action = dataSlice.actions
export default dataSlice