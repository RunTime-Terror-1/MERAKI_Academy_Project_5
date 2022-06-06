// import { createSlice } from "@reduxjs/toolkit"


// export const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         token: localStorage.getItem("token") || "",
//         isloggedIn: (localStorage.getItem("token")) == null || (localStorage.getItem("token")) == '' ? false : true
//     },
//     reducers: {
//         setlogin: (state, action) => {
//             state.token = action.payload;
//             state.isloggedIn = true;
//             localStorage.setItem("token", (action.payload.token));

//         },
//         setlogout: (state, action) => {
         
//             state.token = "";
//             state.isloggedIn = false;
//             localStorage.clear()
//         }
//     }
// });

// export const { setlogin, setlogout } =
//     authSlice.actions;

// export default authSlice.reducer;