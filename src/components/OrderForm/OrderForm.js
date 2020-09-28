/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const validateMessages = {
  required: '${label} is required !',
  types: {
    email: '${label} is not validate email !',
    number: '${label} is not a validate number !',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const OrderForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="middle"
    >
      <Form.Item
        name={['user', 'name']}
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
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore="+84" />
      </Form.Item>
      <Form.Item name={['user', 'address']} label="Address">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          ORDER NOW
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
