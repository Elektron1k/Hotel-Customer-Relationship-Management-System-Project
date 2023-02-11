import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  getAllRooms,
  getAllUsers,
  upgradeCheckOut,
  upgradeCheckIn,
} from '../firebase/requestFirebase';
import { getRoomsFailure, getRoomsFetch, getRoomsSuccess } from './roomsSlise';
import { getUsersFailure, getUsersSuccess } from './usersSlice';

export function* workGetUsersFetch() {
  try {
    const users = yield call(() => getAllUsers());
    yield put(getUsersSuccess(users));
  } catch {
    yield put(getUsersFailure('Error fetching users'));
  }
}

export function* workGetRoomsFetch() {
  try {
    const rooms = yield call(() => getAllRooms());

    const newRooms = yield rooms.map((elem) => {
      return { ...elem, key: elem.id };
    });

    yield put(getRoomsSuccess(newRooms));
  } catch {
    yield put(getRoomsFailure('Error fetching users'));
  }
}
export function* workGetRoomCheckOut(action) {
  const data = yield select((state) => state.rooms.chosenRoom[0]);
  yield call(() => upgradeCheckOut(action, data));
  yield put(getRoomsFetch());
}

export function* workGetRoomCheckIn(action) {
  const data = yield select((state) => state.rooms.chosenRoom[0]);
  yield call(() => upgradeCheckIn(action, data));
  yield put(getRoomsFetch());
}

export function* rootSaga() {
  yield takeEvery('users/getUsersFetch', workGetUsersFetch);
  yield takeEvery('rooms/getRoomsFetch', workGetRoomsFetch);
  yield takeEvery('rooms/getCheckOut', workGetRoomCheckOut);
  yield takeEvery('rooms/getCheckIn', workGetRoomCheckIn);
}

export default rootSaga;
