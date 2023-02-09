import React, { useEffect } from 'react';
import { Col, Layout, Row, Spin } from 'antd';
import logo from '../img/logo.png';
import UserCardHeader from '../components/UserCardHeader';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { testLogIn } from '../redux/usersSlice';

const { Header, Content } = Layout;

const MainLayoutPage = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(testLogIn());
    if (users.errorTestAuthentication && users.errorTestAuthentication) {
      navigate('/login');
    }
  }, [users.users]);
  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <Row justify="space-between">
          <Col>
            <img className="logo" src={logo} />
          </Col>
          <Col>
            <UserCardHeader />
          </Col>
        </Row>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          {users.isAuthentication ? (
            <Outlet />
          ) : (
            <Spin style={{ marginTop: 100 }} tip="Loading" size="large">
              <div className="content" />
            </Spin>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayoutPage;
