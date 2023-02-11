import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, DatePicker, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const CheckIn = ({ isCheckInOpen, handleOkCheckIn, handleCancelCheckIn }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState();

  const getNewGuest = () => {
    handleOkCheckIn(name, date);
    setName('');
    setDate();
  };

  return (
    <>
      <Modal
        title="Check In"
        open={isCheckInOpen}
        onOk={getNewGuest}
        okText="Check In"
        onCancel={handleCancelCheckIn}
        bodyStyle={{ padding: '20px 0' }}
      >
        <Form layout="vertical">
          <Form.Item
            label="Please, enter the guest's name:"
            name="name"
            rules={[
              { required: true, message: "Please, enter the guest's name!" },
            ]}
          >
            <Input
              placeholder="Guest's Name"
              prefix={<UserOutlined />}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Please, enter the approximate date of guest checkout:">
            <DatePicker
              defaultPickerValue={dayjs()}
              value={date}
              onChange={setDate}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

CheckIn.propTypes = {
  isCheckInOpen: PropTypes.bool,
  handleOkCheckIn: PropTypes.func,
  handleCancelCheckIn: PropTypes.func,
};

export default CheckIn;
