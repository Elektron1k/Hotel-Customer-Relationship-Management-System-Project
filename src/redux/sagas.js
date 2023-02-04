import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllRooms, getAllUsers } from '../firebase/requestFirebase';
import { getRoomsFailure, getRoomsSuccess } from './roomsSlise';
import { getUsersFailure, getUsersSuccess } from './usersSlice';

export function* workGetUsersFetch() {
  try {
    const users = yield call(() => getAllUsers());
    yield put(getUsersSuccess(users));
  } catch {
    yield put(getUsersFailure('Error fetching users'));
  }
}

export function* usersSaga() {
  yield takeEvery('users/getUsersFetch', workGetUsersFetch);
}

export function* workGetRoomsFetch() {
  try {
    let roomsIdArray = {};
    const rooms = yield call(() => getAllRooms());
    rooms.forEach((element) => {
      roomsIdArray[element.id] = { ...element };
    });

    yield put(getRoomsSuccess(roomsIdArray));
  } catch {
    yield put(getRoomsFailure('Error fetching users'));
  }
}

export function* rootSaga() {
  yield takeEvery('users/getUsersFetch', workGetUsersFetch);
  yield takeEvery('rooms/getRoomsFetch', workGetRoomsFetch);
}

export default rootSaga;
