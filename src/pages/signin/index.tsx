import React from "react";

import { Form } from "antd";
import { Store } from "antd/lib/form/interface";
import { AccountActionCreators } from "store/account/action";
import { useDispatch } from "react-redux";
import { Input, Button } from "components";
import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const onFinish = (values: Store) => {
    const { userName, password } = values;
    dispatch(
      AccountActionCreators.signIn.request({
        userName,
        password,
      })
    );
  };

  return (
    <div
      style={{
        width: 436,
        background: "#ffffff",
        borderRadius: 20,
        padding: 32,
        margin: "auto",
      }}
    >
      <Form onFinish={onFinish}>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="userName" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%", marginTop: 24 }}
          >
            로그인
          </Button>

          <Button size="large" style={{ width: "100%", marginTop: 24 }}>
            <Link to="/signup">회원가입</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInPage;
