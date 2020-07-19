import { takeLatest, call, put } from "redux-saga/effects";
import { ShopActionTypes, ShopActionCreators } from "./action";

function* getAllSaga(
  action: ReturnType<typeof ShopActionCreators.getAll.request>
) {
  try {
    // const response: User = yield call(AccountAPI.signIn, action.payload);

    // const { token } = response;

    // localStorage.setItem("access_token", token);

    yield put(ShopActionCreators.getAll.success({}));

    // yield put()
  } catch (error) {
    yield put(ShopActionCreators.getAll.failure(error));
  }
}

const shopSaga = [takeLatest(ShopActionCreators.getAll.request, getAllSaga)];

export default shopSaga;
