import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => (
  <Form
    name="login"
    labelCol={{ span: 5 }}
    wrapperCol={{ span: 16 }}
    style={{
      maxWidth: 800,
      margin: '100px auto',
      height: 330,
      backgroundColor: 'white',
    }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h3
      style={{
        margin: '20px 30px',
        padding: '20px 30px',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      Authentication
    </h3>
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 2, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item style={{ width: 200, margin: '0 auto' }}>
      <Button
        type="primary"
        htmlType="submit"
        style={{ width: '100%', borderRadius: 0 }}
      >
        Log In
      </Button>
    </Form.Item>
  </Form>
);

export default LoginPage;
