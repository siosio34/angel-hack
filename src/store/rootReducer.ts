import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loadingReducer from "./loading/reducer";

import { createBrowserHistory } from "history";

import accountReducer from "./account/reducer";
import orderReducer from "./order/reducer";
import shopReducer from "./shop/reducer";

export const history = createBrowserHistory();

export default combineReducers({
  loading: loadingReducer,
  account: accountReducer,
  order: orderReducer,
  shop: shopReducer,
  router: connectRouter(history),
});
