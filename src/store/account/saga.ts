import { takeLatest, call, put } from "redux-saga/effects";
import { AccountActionCreators } from "./action";

import { push } from "connected-react-router";

// function* loginSaga(
//   action: ReturnType<typeof AccountActionCreators.login.request>
// ) {
//   try {
//     const response: LoginResponse = yield call(
//       AccountAPI.login,
//       action.payload
//     );

//     const { access_token, refresh_token, user } = response;

//     localStorage.setItem("access_token", access_token);
//     localStorage.setItem("refresh_token", refresh_token);

//     yield put(AccountActionCreators.login.success({ user }));
//     yield put(push("/main"));

//     // yield put()
//   } catch (error) {
//     yield put(AccountActionCreators.login.failure(error));
//   }
// }

// function* registerSaga(
//   action: ReturnType<typeof AccountActionCreators.register.request>
// ) {
//   try {
//     const response = yield call(AccountAPI.register, action.payload);
//     yield put(AccountActionCreators.register.success({}));
//   } catch (error) {
//     yield put(AccountActionCreators.register.failure(error));
//   }
// }

// function* getUserSaga(
//   action: ReturnType<typeof AccountActionCreators.getUser.request>
// ) {
//   try {
//     const response: User = yield call(AccountAPI.getUser);

//     yield put(AccountActionCreators.getUser.success(response));
//   } catch (error) {
//     yield put(AccountActionCreators.getUser.failure(error));
//   }
// }

// const accountSaga = [
//   takeLatest(AccountActionCreators.login.request, loginSaga),
//   takeLatest(AccountActionCreators.register.request, registerSaga),
//   takeLatest(AccountActionCreators.getUser.request, getUserSaga),
// ];

export default accountSaga;
