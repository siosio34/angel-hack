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

import ShopDetailPage from "pages/shopDetail";
import Streeming from "pages/streemming";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <AuthRoute path="/shops" exact>
              <ShopPage />
            </AuthRoute>

            <AuthRoute path="/shops/:id" exact>
              <ShopDetailPage />
            </AuthRoute>

            <AuthRoute path="/shops/streeming/:id" exact>
              <Streeming />
            </AuthRoute>
          </Switch>
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
