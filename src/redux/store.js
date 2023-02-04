import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import roomsSlice from './roomsSlise';
import { rootSaga } from './sagas';
import usersSlice from './usersSlice';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    users: usersSlice,
    rooms: roomsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
