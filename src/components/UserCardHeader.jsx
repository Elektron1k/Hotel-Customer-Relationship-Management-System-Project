import { Avatar, Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/usersSlice';

const UserCardHeader = () => {
  const activUser = useSelector((store) => store.users.activUser);
  const isAuthentication = useSelector((store) => store.users.isAuthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="user-card-header">
      {isAuthentication ? (
        <>
          <Avatar
            style={{ verticalAlign: 'middle' }}
            size="large"
            gap={2}
            src={activUser.image}
          />
          <Button type="text" onClick={() => dispatch(logOut())}>
            Log Out
          </Button>
        </>
      ) : (
        <Button type="text" onClick={() => navigate('/login')}>
          Log In
        </Button>
      )}
    </div>
  );
};

export default UserCardHeader;
