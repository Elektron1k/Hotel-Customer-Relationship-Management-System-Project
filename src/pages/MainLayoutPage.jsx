import React from 'react';
import { Col, Layout, Row, theme } from 'antd';
import logo from '../img/logo.png';
import UserCardHeader from '../components/UserCardHeader';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const MainLayoutPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayoutPage;
