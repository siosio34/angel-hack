import { all } from "redux-saga/effects";
import accountSaga from "./account/saga";

export default function* rootSaga() {
  yield all([...accountSaga]);
}

//https://redux-saga.js.org/docs/advanced/RootSaga.html
