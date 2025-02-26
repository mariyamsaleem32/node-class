import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './form.css'; 

const onFinish = (values, setDisplayData) => {
  console.log('Success:', values);
  setDisplayData(values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const AppForm = () => {
  const [displayData, setDisplayData] = useState(null);

  return (
    <div className="app-container">
      <Form
        name="basic"
        className="app-form"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={(values) => onFinish(values, setDisplayData)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input className="app-input" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input className="app-input" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password className="app-input" />
        </Form.Item>

        <Form.Item label={null} className="submit-button-container">
          <Button type="primary" htmlType="submit" className="submit-button">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {displayData ? (
        <div className="display-area">
          <p><strong>Username:</strong> {displayData.username}</p>
          <p><strong>Email:</strong> {displayData.email}</p>
        </div>
      ) : (
        <p className="user-message"></p>
      )}
    </div>
  );
};

export default AppForm;
