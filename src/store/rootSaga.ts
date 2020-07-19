import { all } from "redux-saga/effects";
import accountSaga from "./account/saga";
import shopSaga from "./shop/saga";
import orderSaga from "./order/saga";

export default function* rootSaga() {
  yield all([...accountSaga, ...shopSaga, ...orderSaga]);
}

//https://redux-saga.js.org/docs/advanced/RootSaga.html
