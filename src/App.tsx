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
import SignInPage from "pages/signin";
import SignUpPage from "pages/signup";
import ShopPage from "pages/shop";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootPage>
          <Switch>
            <Route path="/signin" exact>
              <SignInPage />
            </Route>
            <Route path="/signup" exact>
              <SignUpPage />
            </Route>
            <Route path="/shops">
              <ShopPage />
            </Route>
          </Switch>
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
