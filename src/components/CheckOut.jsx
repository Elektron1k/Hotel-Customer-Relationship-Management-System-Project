import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const CheckOut = ({
  isCheckOutOpen,
  handleOkCheckOut,
  handleCancelCheckOut,
  roomNumber,
}) => {
  return (
    <>
      <Modal
        title="Check Out"
        open={isCheckOutOpen}
        onOk={handleOkCheckOut}
        okText="Confirm"
        onCancel={handleCancelCheckOut}
        bodyStyle={{ padding: '20px 0' }}
      >
        <p>Do you confirm the check-out Room {roomNumber}?</p>
      </Modal>
    </>
  );
};

CheckOut.propTypes = {
  isCheckOutOpen: PropTypes.bool,
  handleOkCheckOut: PropTypes.func,
  handleCancelCheckOut: PropTypes.func,
  roomNumber: PropTypes.number,
};

export default CheckOut;
