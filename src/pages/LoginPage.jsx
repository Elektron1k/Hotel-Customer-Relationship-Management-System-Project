import React, { useEffect } from 'react';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/usersSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const isAuthentication = useSelector((store) => store.users.isAuthentication);
  const errorAuthentication = useSelector(
    (store) => store.users.errorAuthentication
  );

  const onFinish = (values) => {
    dispatch(logIn(values));
    onReset();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onClose = (e) => {
    console.log(e, 'I was closed.');
  };

  useEffect(() => {
    if (isAuthentication) {
      navigate('/');
    }
  });

  return (
    <Form
      form={form}
      name="login"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: 800,
        margin: '100px auto',
        height: 330,
        background: 'white',
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
      {errorAuthentication && (
        <Alert
          message="Incorrect username or password"
          type="error"
          closable
          onClose={onClose}
        />
      )}
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
};

export default LoginPage;
