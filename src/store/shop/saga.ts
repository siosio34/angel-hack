import { takeLatest, call, put } from "redux-saga/effects";
import { ShopActionTypes, ShopActionCreators } from "./action";
import { ShopAPI } from "apis";
import { StoreResponse } from "models/shop.model";

function* getAllSaga(
  action: ReturnType<typeof ShopActionCreators.getAll.request>
) {
  try {
    const response: StoreResponse = yield call(ShopAPI.getAll);
    console.log("response", response);

    // const { token } = response;

    // localStorage.setItem("access_token", token);

    yield put(ShopActionCreators.getAll.success(response));

    // yield put()
  } catch (error) {
    yield put(ShopActionCreators.getAll.failure(error));
  }
}

const shopSaga = [takeLatest(ShopActionCreators.getAll.request, getAllSaga)];

export default shopSaga;
