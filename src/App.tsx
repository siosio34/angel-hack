import React from "react";
import { Provider, useSelector } from "react-redux";
import configureStore, { RootState } from "./store/configureStore";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { history } from "store/rootReducer";
import RootPage from "pages/root";
import AuthRoute from "components/authRoute";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootPage>
          <Switch></Switch>
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
