import React, { useEffect } from "react";
import { RootState } from "store/configureStore";
import { useSelector, useDispatch } from "react-redux";

import { Layout } from "antd";
import { AccountActionCreators } from "store/account/action";
import { Button, Text } from "components";
import Logo from "../../src/assets/logo.png";

const { Header, Content } = Layout;

const RootPage: React.FC = (props) => {
  const loadingStore = useSelector((state: RootState) => state.loading);
  const { loading = false } = loadingStore;

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Logo" />
        <div>
          <a href="/signin" style={{ color: "#ffffff" }}>
            로그인
          </a>
          <a href="/signup" style={{ marginLeft: 8, color: "#ffffff" }}>
            회원가입
          </a>
        </div>
      </Header>
      <Content style={{ display: "flex" }}>{props.children}</Content>
    </Layout>
  );
};

export default RootPage;
