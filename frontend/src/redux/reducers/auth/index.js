import { createSlice } from "@reduxjs/toolkit"


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        isLoggedIn: (localStorage.getItem("token")) == null || (localStorage.getItem("token")) == '' ? false : true
    },
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem("token", (action.payload.token));

        },
        setLogout: (state, action) => {
         
            state.token = "";
            state.isLoggedIn = false;
            localStorage.clear()
        }
    }
});

export const { setLogin: setlogin, setLogout: setlogout } =
    authSlice.actions;

export default authSlice.reducer;