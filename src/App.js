import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import MainLayoutPage from './pages/MainLayoutPage';
import { getRoomsFetch } from './redux/roomsSlise';
import { getUsersFetch, logIn } from './redux/usersSlice';

function App() {
  const users = useSelector((store) => store.users.users);
  const rooms = useSelector((store) => store.rooms.rooms);
  const dispatch = useDispatch();
  console.log('users APP', users);
  console.log('rooms APP', rooms);

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getRoomsFetch());
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user') && localStorage.getItem('password')) {
      dispatch(
        logIn({
          username: localStorage.getItem('user'),
          password: localStorage.getItem('password'),
        })
      );
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayoutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
