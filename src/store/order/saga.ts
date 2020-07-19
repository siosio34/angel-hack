import { takeLatest, call, put } from "redux-saga/effects";
import { OrderActionTypes, OrderActionCreators } from "./action";

import { push } from "connected-react-router";
import { AccountAPI } from "apis";
import { User } from "models/user.model";
import orderApi from "apis/order.api";
import { Order } from "models/order.model";

function* getAllSaga(
  action: ReturnType<typeof OrderActionCreators.getAll.request>
) {
  try {
    const response: Order = yield call(orderApi.getAll);

    yield put(OrderActionCreators.getAll.success({}));

    // yield put()
  } catch (error) {
    yield put(OrderActionCreators.getAll.failure(error));
  }
}

const orderSaga = [takeLatest(OrderActionCreators.getAll.request, getAllSaga)];

export default orderSaga;
