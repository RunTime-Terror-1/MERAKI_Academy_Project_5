import { createSlice } from "@reduxjs/toolkit"


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        isLoggedIn: (localStorage.getItem("token")) == null || (localStorage.getItem("token")) == '' ? false : true,
        isSignUpFormShown : false,
    },
    reducers: {
        setLogin: (state, action) => {
            console.log(action);

            state.token = action.payload;
            state.isLoggedIn = true;
           localStorage.setItem("token",action.payload)

        },
        setLogout: (state, action) => {
            state.token = "";
            state.isLoggedIn = false;
            localStorage.clear()
        },
        setIsSignUpFormShown: (state, action) => {
            state.isSignUpFormShown = !state.isSignUpFormShown;
        }
    }
});

export const { setLogin: setlogin, setLogout: setlogout,setIsSignUpFormShown } =
    authSlice.actions;

export default authSlice.reducer;