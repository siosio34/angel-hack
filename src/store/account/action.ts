import createAsyncAction from "../../utils/createAsyncAction";
import { SignInRequestBody, SignUpRequestBody, AuthResponse } from "apis/account.api";
import { User } from "models/user.model";
// import { LoginRequestBody, RegisterRequestBody } from 'apis/account';
// import { User } from 'models/teacher';

const prefix = "AUTH";

export const AccountActionTypes = {
  SIGNIN: `${prefix}/SIGNIN`,
  SIGNUP: `${prefix}/SIGNUP`,
};

export const AccountActionCreators = {
  signIn: createAsyncAction<SignInRequestBody, AuthResponse>(AccountActionTypes.SIGNIN),
  signUp: createAsyncAction<SignUpRequestBody, AuthResponse>(AccountActionTypes.SIGNUP),
};
