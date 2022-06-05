import { createSlice } from "@reduxjs/toolkit";

const superAdminReducer = createSlice({
  name: "superAdmin",
  initialState: {
    users: [],
    requests: [],
  },
  reducer: {
    // action.payload : [requests]
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    // action.payload : [users or only owners]
    setUsers: (state, action) => {
      state.requests = action.payload;
    },
  },
});

export const {setRequests,setUsers} = superAdminReducer.actions;
export default superAdminReducer.reducer;