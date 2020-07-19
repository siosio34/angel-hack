import React from "react";

import { Button, Input } from "components";
import { Form, Checkbox, message } from "antd";

import { AccountActionCreators } from "store/account/action";
import { useDispatch } from "react-redux";
import { Store } from "antd/lib/form/interface";

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();

  const onFinish = (values: Store) => {
    const { username, password, confirmPassword, phoneNumber } = values;

    if (password !== confirmPassword) {
      message.error("패스워드가 일치하지않습니다.");
      return;
    }

    dispatch(
      AccountActionCreators.signUp.request({
        username,
        password,
        phoneNumber,
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
      <Form onFinish={(values) => onFinish(values)}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="아이디" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" placeholder="비밀번호를 다시 입력해주세요." />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="전화번호를 입력하세요." />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%", marginTop: 24 }}
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpPage;
