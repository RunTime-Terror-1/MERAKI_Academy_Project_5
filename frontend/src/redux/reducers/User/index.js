import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: "User",
    initialState: {
        cart: [],
        price: []

    },
    reducers: {
        setCart: (state, action) => {
            state.cart.push(action.payload.items)
            console.log(action.payload.items, "dash")
            console.log(state.cart, "cdfd")
        },
        deleteCart: (state, action) => {
            // action = {type,payload:2}
            state.cart = state.cart.filter((cartitem, index) => {
                console.log("delete here")
                return cartitem.id != action.payload.id;
            });

        },

        setPrice: (state, action) => {
            // state.price.push({price:action.payload.price,id:action.payload.indexitem})
            console.log("ghgh")
            // console.log(state.price,"hh")
            if (state.price.length == 0) {
                console.log("length")
                state.price.push({ price: action.payload.price, id: action.payload.indexitem })

            } else {
                console.log("not zero")

                let loop = false
                // console.log(state.price, "priceeee")


                state.price = state.price.filter((element, index) => {
                    console.log(element.id)
                    console.log(action.payload.indexitem,"idpy")
                    if (element.id == action.payload.indexitem) {
                        element.price = action.payload.price
                        loop = true
                        return element
                    }
                    else {
                        return element
                    }



                })

                if (loop == false) {
                    state.price.push({ price: action.payload.price, id: action.payload.indexitem })
                }
            }
        },

    }

});

export const { setCart, deleteCart, setPrice } =
    UserSlice.actions;

export default UserSlice.reducer;

