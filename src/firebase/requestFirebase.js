import { get } from 'firebase/database';
import { accountRef, roomRef } from './firebase';

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
export { getAllUsers, getAllRooms };
