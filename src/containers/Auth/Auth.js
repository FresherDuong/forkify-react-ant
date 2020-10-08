import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Space, message } from 'antd';
import logo from './../../assets/img/logo.png';
import styles from './Auth.module.css';
import * as actionCreator from './../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const { error, loading, token } = useSelector((state) => {
    return {
      token: state.auth.token,
      error: state.auth.error,
      loading: state.auth.loading,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const changeAuthType = () => {
    setIsLogin(!isLogin);
  };

  const onFinish = (values) => {
    dispatch(
      actionCreator.auth(
        values.email,
        values.password,
        values.username,
        values.phone,
        !isLogin
      )
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let redirect = null;

  if (token && !error) {
    redirect = <Redirect to="/" />;
  }

  return (
    <div className={styles.Auth}>
      {redirect}
      <div className={styles.AuthLogo}>
        <img src={logo} alt="app-logo" />
      </div>
      <Form
        {...layout}
        name="basicForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {isLogin ? null : (
          <React.Fragment>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: 'Please input your phone number' },
              ]}
            >
              <Input addonBefore="+84" />
            </Form.Item>
          </React.Fragment>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email',
              min: 6,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Checkbox onChange={changeAuthType}>Register new account</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            {isLogin ? (
              <Button type="primary" htmlType="submit" loading={loading}>
                Log in
              </Button>
            ) : (
              <Button type="primary" htmlType="submit" loading={loading}>
                Register new account
              </Button>
            )}
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
