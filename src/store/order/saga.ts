import { takeLatest, call, put } from "redux-saga/effects";
import { OrderActionTypes, OrderActionCreators } from "./action";

import { push } from "connected-react-router";
import { AccountAPI } from "apis";
import { User } from "models/user.model";

function* getAllSaga(
  action: ReturnType<typeof OrderActionCreators.getAll.request>
) {
  try {
    // const response: User = yield call(AccountAPI.signIn, action.payload);

    // const { token } = response;

    // localStorage.setItem("access_token", token);

    yield put(OrderActionCreators.getAll.success({}));

    // yield put()
  } catch (error) {
    yield put(OrderActionCreators.getAll.failure(error));
  }
}

const orderSaga = [
  takeLatest(OrderActionCreators.getAll.request, getAllSaga),
];

export default orderSaga;
