import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore(
  {
    reducer: {},
  },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);
