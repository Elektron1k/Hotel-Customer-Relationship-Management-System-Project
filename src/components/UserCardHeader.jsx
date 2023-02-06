import { Avatar, Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const UserCardHeader = () => {
  const users = useSelector((store) => store.users.users);

  return (
    <div className="user-card-header">
      <Avatar
        style={{ verticalAlign: 'middle' }}
        size="large"
        gap={2}
        src={users.user1.image}
      />
      <Button type="text">Log Out</Button>
    </div>
  );
};

export default UserCardHeader;
