import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: "User",
    initialState: {
        cart: [],
      
    },
    reducers: {
        setCart: (state, action) => {
            state.cart.push(action.payload.items)
            console.log(action.payload.items,"dash")
        },


    }

});

export const {setCart} =
    UserSlice.actions;

export default UserSlice.reducer;

