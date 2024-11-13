import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null,
};

const authSlice = createSlice({
    name: 'auth',  // Name of the slice
    initialState,
    reducers: {
      // Action to set user details
      setUserDetails(state, action) {
        state.userDetails = action.payload;
      },
      // Action to log out the user (clear userDetails)
      logout(state) {
        state.userDetails = null;
      },
    },
  });

export const { setUserDetails, logout } = authSlice.actions;

export default authSlice.reducer;

