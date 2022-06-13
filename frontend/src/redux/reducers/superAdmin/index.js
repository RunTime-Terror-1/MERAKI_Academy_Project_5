import { createSlice } from "@reduxjs/toolkit";

const superAdminReducer = createSlice({
  name: "superAdmin",
  initialState: {
    users: [],
    requests: [],
    restaurants: [],
    meals:[]
  },
  reducers: {
    // action.payload : [requests]
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    // action.payload : [users or only owners]
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    // action.payload : [restaurants]
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const { setRequests, setUsers, setRestaurants, setMeals } =
  superAdminReducer.actions;
export default superAdminReducer.reducer;
