import { createSlice } from "@reduxjs/toolkit";
 

export const UserSlice = createSlice({
    name: "User",
    initialState: {
        articles: [],
        comment:[]
    },
    reducers: {
       
    }

});

export const {  } =
    UserSlice.actions;

export default UserSlice.reducer;

