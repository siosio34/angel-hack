import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loadingReducer from "./loading/reducer";

import { createBrowserHistory } from "history";

import accountReducer from "./account/reducer";

export const history = createBrowserHistory();

export default combineReducers({
  account: accountReducer,
  loading: loadingReducer,
  router: connectRouter(history),
});
