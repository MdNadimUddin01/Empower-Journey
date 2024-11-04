import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast" 

const initialState = {
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCart(state , value){
            state.totalItems = value.payload
        },
        addToCart(state){
            
        }
        
    }

})

export const {setCart} = cartSlice.actions
export default cartSlice.reducer