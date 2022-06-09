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
            console.log(state.cart,"cdfd")
        },
        deleteCart: (state, action) => {
            // action = {type,payload:2}
            state.cart = state.cart.filter((cartitem, index) => {
                return cartitem.id != action.payload.id;
            });
            console.log(state.articles)
        },

    }

});

export const {setCart,deleteCart} =
    UserSlice.actions;

export default UserSlice.reducer;

