import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    chosenRoom: [],
    isLoadingRooms: false,
    errorRooms: '',
    idInFirebase: null,
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
    getChosenRoom: (state, action) => {
      state.chosenRoom = state.rooms.filter(
        (room) => room.id === action.payload
      );
      state.rooms.map((room, index) => {
        if (room.id === action.payload) {
          state.idInFirebase = index;
        }
      });
    },
    getCheckOut: () => {},
    getCheckIn: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  getRoomsFetch,
  getRoomsSuccess,
  getRoomsFailure,
  getChosenRoom,
  getCheckOut,
  getCheckIn,
} = roomsSlice.actions;

export default roomsSlice.reducer;
