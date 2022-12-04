import { configureStore, createSlice  } from "@reduxjs/toolkit";
import dataUtil from "./util/data";

// useState역할
const inititialProdData = createSlice( {
    // state 이름
    name : "ProductData",
    initialState : dataUtil.getProductData()
} );

export default configureStore( {
    reducer : {
        inititialProdData : inititialProdData.reducer
    }
} );