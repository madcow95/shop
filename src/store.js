import { configureStore, createSlice  } from "@reduxjs/toolkit";
import dataUtil from "./util/data";

// useState역할
const inititialProdData = createSlice( {
    // state 이름
    name : "ProductData",
    initialState : dataUtil.getProductData(),
    // state 수정을 위한 함수
    reducers : {
        getMoreProduct( state ) {
            return state.push(
                { name : "choi" },
                { age : 28 }
            )
            // console.log(state[0]);
            // const CopiedProducts = this
            // dataUtil.getMoreData( 2 ).then( res => {
                // console.log({res});
                // return state.concat( res );
            // } )
        }
    }
} );

export let { getMoreProduct } = inititialProdData.actions;

export default configureStore( {
    reducer : {
        inititialProdData : inititialProdData.reducer
    }
} );