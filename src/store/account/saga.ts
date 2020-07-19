import { takeLatest, call, put } from "redux-saga/effects";
import { AccountActionCreators } from "./action";

import { push } from "connected-react-router";
import { AccountAPI } from "apis";
import { User } from "models/user.model";
import { AuthResponse } from "apis/account.api";

function* signInSaga(
  action: ReturnType<typeof AccountActionCreators.signIn.request>
) {
  try {
    const response: AuthResponse = yield call(
      AccountAPI.signIn,
      action.payload
    );

    const { access_token, refresh_token } = response;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    yield put(AccountActionCreators.signIn.success(response));
    yield put(push("/shops"));

    // yield put()
  } catch (error) {
    yield put(AccountActionCreators.signIn.failure(error));
  }
}

function* signUpSaga(
  action: ReturnType<typeof AccountActionCreators.signUp.request>
) {
  try {
    const response: AuthResponse = yield call(
      AccountAPI.signUp,
      action.payload
    );

    const { access_token, refresh_token } = response;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    yield put(AccountActionCreators.signUp.success(response));
    yield put(push("/shops"));
  } catch (error) {
    yield put(AccountActionCreators.signUp.failure(error));
  }
}

const accountSaga = [
  takeLatest(AccountActionCreators.signIn.request, signInSaga),
  takeLatest(AccountActionCreators.signUp.request, signUpSaga),
];

export default accountSaga;
