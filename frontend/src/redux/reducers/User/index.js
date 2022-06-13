import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: "User",
    initialState: {
        cart: [],
        price: [],
        total: 0,
        sumPriceUser: "",

    },
    reducers: {
        setCart: (state, action) => {
            console.log("jkj")
            if (state.cart.length == 0) {
                console.log("welco55555mmmmm")
                // console.log(action.payload.items,"length")
                state.cart.push(action.payload.items)

            }else{
                console.log("55")

                let loop = true

                state.cart = state.cart.filter((element, index) => {
                    console.log(element.id)
                    console.log(action.payload.items.id, "idpy")
                    if (element.id == action.payload.items.id) {
                        element = action.payload.items
                        loop = false
                        return element
                    }
                    else {
                        return element
                    }



                })
                if (loop == true) {
                    state.cart.push(action.payload.items)
                }
            }

            // state.cart.push(action.payload.items)
            // console.log(action.payload.items, "dash")
            // console.log(state.cart, "cdfd")


        },
        deleteCart: (state, action) => {
            // action = {type,payload:2}
            state.cart = state.cart.filter((cartitem, index) => {
                console.log("delete here")
                return cartitem.id != action.payload.id;
            });
            
            state.price = state.price.filter((cartitem, index) => {
                console.log("delete here")
                return cartitem.id != action.payload.id;
            });


        },
     
        setPrice: (state, action) => {
            // state.price.push({price:action.payload.price,id:action.payload.indexitem})
            console.log("ghgh")
           
            if (state.price.length == 0) {
                console.log("length")
                state.price.push({ price: action.payload.price, id: action.payload.indexitem,priceOne:action.payload. priceOne,name:action.payload.name  })

            } else {
                console.log("not zero")

                let loop = false
         
                   

                state.price = state.price.filter((element, index) => {
                    console.log(element.id)
                    console.log(action.payload.indexitem, "idpy")
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
                    state.price.push({ price: action.payload.price, id: action.payload.indexitem,priceOne:action.payload. priceOne,name:action.payload.name })
                }
            }
        },
        // setsumPriceUser: (state, action) => {
        //     state.sumPriceUser = state.price.reduce((acc, elemnt, index) => {

        //         return acc + elemnt
        //     })
        //     console.log(state.sumPriceUser)
        //     console.log("sum")
        // },


        setTotal: (state, action) => {

            //payload = {"opr":"+" , value:10}

            if (action.payload.opr === "+") {

                state.total = state.total + action.payload.value
            } else {
                state.total = state.total - action.payload.value

            }


        }
    }

});

export const { setCart, deleteCart, setPrice, setsumPriceUser, setTotal } =
    UserSlice.actions;

export default UserSlice.reducer;

