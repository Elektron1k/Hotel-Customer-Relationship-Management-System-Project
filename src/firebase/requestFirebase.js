import { get, ref, update } from 'firebase/database';
// import { getRoomsFetch } from '../redux/roomsSlise';
import { db, accountRef, roomRef } from './firebase';

const getAllUsers = async () => {
  return await get(accountRef).then((snapshot) => {
    return snapshot.val();
  });
};

const getAllRooms = async () => {
  return await get(roomRef).then((snapshot) => {
    return snapshot.val();
  });
};

const upgradeCheckOut = async (id, room) => {
  const upgradeRoom = {
    ...room,
    isCheckedIn: false,
    guest: '',
    checkInDate: null,
  };
  delete upgradeRoom.key;
  const updates = {};
  updates['/Rooms/' + id.payload] = upgradeRoom;
  return await update(ref(db), updates);
};

const upgradeCheckIn = async (action, chosenRoom) => {
  const upgradeRoom = {
    ...chosenRoom,
    isCheckedIn: true,
    guest: action.payload.name,
    checkInDate: action.payload.newDate,
  };
  console.log();
  delete upgradeRoom.key;
  const updates = {};
  updates['/Rooms/' + action.payload.idInFirebase] = upgradeRoom;
  return await update(ref(db), updates);
};

export { getAllUsers, getAllRooms, upgradeCheckOut, upgradeCheckIn };
