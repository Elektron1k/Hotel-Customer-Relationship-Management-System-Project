import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    activUser: {},
    isLoadingUsers: false,
    isAuthentication: false,
    errorAuthentication: false,
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
    logIn: (state, actions) => {
      if (
        state.users[actions.payload.username] &&
        state.users[actions.payload.username].password ===
          actions.payload.password
      ) {
        state.activUser = state.users[actions.payload.username];
        state.activUser.name = actions.payload.username;
        state.isAuthentication = true;
        state.errorAuthentication = false;
        if (actions.payload.remember) {
          localStorage.setItem('user', actions.payload.username);
          localStorage.setItem('password', actions.payload.password);
        }
      } else {
        state.errorAuthentication = true;
      }
    },
    logOut: (state) => {
      state.activUser = {};
      state.isAuthentication = false;
      state.errorAuthentication = false;
      localStorage.removeItem('user');
      localStorage.removeItem('password');
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUsersFetch,
  getUsersSuccess,
  getUsersFailure,
  logIn,
  logOut,
} = usersSlice.actions;

export default usersSlice.reducer;
