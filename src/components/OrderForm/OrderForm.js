/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input, Button, Spin, Result } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionsCreator from './../../store/actions/index';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const validateMessages = {
  required: '${label} is required',
  types: {
    email: '${label} is not validate email',
    number: '${label} is not a validate number',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const OrderForm = (props) => {
  const loading = useSelector((state) => state.order.loading);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const ordered = useSelector((state) => state.order.ordered);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const orderData = {
      ...values,
      meals: [...props.meals],
      userId: userId,
      totalPrice: props.totalPrice,
      orderAt: new Date(),
    };

    dispatch(actionsCreator.orderNow(orderData, token, props.orderType));
  };

  let form = (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="middle"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[{ required: true, message: 'Please input your phone number' }]}
      >
        <Input addonBefore="+84" />
      </Form.Item>
      <Form.Item name="address" label="Address">
        <Input />
      </Form.Item>
      <Form.Item name="note" label="Note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          ORDER NOW
        </Button>
      </Form.Item>
    </Form>
  );

  if (token == null) {
    form = (
      <Result
        title="Please login to order your meal !"
        extra={
          <Link to="/auth">
            <Button type="primary" key="console">
              Log in now
            </Button>
          </Link>
        }
      />
    );
  }

  if (loading) {
    form = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (!loading && ordered) {
    const titleResult = `Successfully ordered ${
      props.mealTitle ? props.mealTitle : `your favorites`
    }`;
    const subTitleResult = `Order ID: "${ordered}"`;
    form = (
      <Result status="success" title={titleResult} subTitle={subTitleResult} />
    );
  }

  return form;
};

export default OrderForm;
