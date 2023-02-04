import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    isLoadingRooms: false,
    errorRooms: '',
  },
  reducers: {
    getRoomsFetch: (state) => {
      state.isLoadingRooms = true;
    },
    getRoomsSuccess: (state, actions) => {
      state.rooms = actions.payload;
      state.isLoadingRooms = false;
    },
    getRoomsFailure: (state, actions) => {
      state.isLoadingRooms = false;
      state.errorRooms = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRoomsFetch, getRoomsSuccess, getRoomsFailure } =
  roomsSlice.actions;

export default roomsSlice.reducer;
