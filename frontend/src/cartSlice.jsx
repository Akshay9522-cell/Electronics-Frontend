
import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
     
    name:"mycart",

    initialState:{
        cart:[]
    },

    reducers:{
        addTocart:(state,action)=>{
             console.log(action.payload)
        }
    }
})

export const{addTocart}=cartSlice.actions

export default cartSlice.reducer