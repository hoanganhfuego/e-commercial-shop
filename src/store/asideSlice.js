import { createSlice } from "@reduxjs/toolkit";
import { reducersAside } from "./reducers";

const asideSlice = createSlice({
    name:"aside slice",
    initialState:{
        allproduct: true,
        tshirt: false,
        short: false,
        jean: false,
        shirt: false,    
    },
    reducers : reducersAside
})
export const actionAside = asideSlice.actions
export default asideSlice