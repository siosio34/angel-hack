import React, { useEffect } from "react";
import { RootState } from "store/configureStore";
import { useSelector, useDispatch } from "react-redux";

import { Spin } from "antd";
import { AccountActionCreators } from "store/account/action";

const RootPage: React.FC = (props) => {
  const loadingStore = useSelector((state: RootState) => state.loading);
  const { loading = false } = loadingStore;

  return <>{props.children}</>;
};

export default RootPage;
