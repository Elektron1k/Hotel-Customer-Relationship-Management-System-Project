import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    isLoadingUsers: false,
    errorUsers: '',
  },
  reducers: {
    getUsersFetch: (state) => {
      state.isLoadingUsers = true;
    },
    getUsersSuccess: (state, actions) => {
      state.users = actions.payload;
      state.isLoadingUsers = false;
    },
    getUsersFailure: (state, actions) => {
      state.isLoadingUsers = false;
      state.errorUsers = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsersFetch, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export default usersSlice.reducer;
