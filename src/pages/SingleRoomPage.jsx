import React, { useEffect } from 'react';
import { Button, Carousel, Col, List, Row, Space, Spin } from 'antd';
import { CheckOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChosenRoom } from '../redux/roomsSlise';

const SingleRoomPage = () => {
  const navigate = useNavigate();
  const { roomid } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  const contentStyle = {
    margin: '20px 0',
  };

  useEffect(() => {
    dispatch(getChosenRoom(roomid));
  }, [rooms.rooms]);

  return (
    <div>
      <Space wrap>
        <Button
          type="link"
          onClick={() => {
            navigate('/');
          }}
        >
          <HomeOutlined /> Back Home
        </Button>
      </Space>
      {rooms.chosenRoom[0] ? (
        <>
          <Row>
            <Col span={10}>
              <Carousel>
                {rooms.chosenRoom[0].gallery.map((el, index) => {
                  return (
                    <div key={index}>
                      <img style={contentStyle} src={el} />
                    </div>
                  );
                })}
              </Carousel>
            </Col>
            <Col span={14}>
              <Row>
                <Col span={12}>
                  <h1 className="room-title">
                    Room {rooms.chosenRoom[0].number}
                  </h1>
                  <p className="room-params">
                    Type: <span>{rooms.chosenRoom[0].type}</span>
                  </p>
                  <p className="room-params">
                    Occupancy: <span>{rooms.chosenRoom[0].occupancy}</span>
                  </p>
                  <p className="room-params">
                    Price: <span>{rooms.chosenRoom[0].price}$</span>
                  </p>
                  <p className="room-params">
                    Guest: <span>{rooms.chosenRoom[0].guest}</span>
                  </p>
                </Col>
                <Col span={12}>
                  <Row justify="end">
                    <Button className="single-page-button">Check In</Button>
                    <Button type="primary" className="single-page-button">
                      Check Out
                    </Button>
                  </Row>
                  <div>
                    <h3 className="room-params">Features:</h3>
                    <List
                      size="small"
                      dataSource={rooms.chosenRoom[0].features}
                      renderItem={(item) => (
                        <List.Item className="list-item-features">
                          <CheckOutlined className="room-params-item" />
                          {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="room-description">
            <Col flex="90px" className="room-description-title">
              Description:
            </Col>
            <Col flex="1650px">{rooms.chosenRoom[0].description}</Col>
          </Row>
        </>
      ) : (
        <Spin style={{ marginTop: 100 }} tip="Loading" size="large">
          <div className="content" />
        </Spin>
      )}
    </div>
  );
};

export default SingleRoomPage;
