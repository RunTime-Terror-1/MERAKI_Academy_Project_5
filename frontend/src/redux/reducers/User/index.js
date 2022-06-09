import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: "User",
    initialState: {
        cart: [],
        price:[]
      
    },
    reducers: {
        setCart: (state, action) => {
            state.cart.push(action.payload.items)
            console.log(action.payload.items,"dash")
            console.log(state.cart,"cdfd")
        },
        deleteCart: (state, action) => {
            // action = {type,payload:2}
            state.cart = state.cart.filter((cartitem, index) => {
                console.log("delete here")
                return cartitem.id != action.payload.id;
            });
        
        },

        setPrice: (state, action) => {
            state.price.push(action.payload.price)
            // console.log(action.payload.items,"dash")
            // console.log(state.cart,"cdfd")
            console.log(state.price,"hh")
        },

    }

});

export const {setCart,deleteCart,setPrice} =
    UserSlice.actions;

export default UserSlice.reducer;

