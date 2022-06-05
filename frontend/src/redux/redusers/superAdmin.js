import { createSelector } from "@reduxjs/toolkit";

const superAdminReducer = createSelector({
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

const {setRequests,setUsers} = superAdminReducer.action;
export default superAdminReducer.reducer;