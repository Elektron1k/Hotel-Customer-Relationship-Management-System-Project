import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import MainLayoutPage from './pages/MainLayoutPage';
import RoomsTablePage from './pages/RoomsTablePage';
import SingleRoomPage from './pages/SingleRoomPage';
import { getRoomsFetch } from './redux/roomsSlise';
import { getUsersFetch } from './redux/usersSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getRoomsFetch());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayoutPage />}>
          <Route index element={<RoomsTablePage />} />
          <Route path="/rooms/:roomid" element={<SingleRoomPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
