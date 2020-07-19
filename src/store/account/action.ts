import createAsyncAction from "../../utils/createAsyncAction";
import { SignInRequestBody, SignUpRequestBody } from "apis/account";
import { User } from "models/user.model";
// import { LoginRequestBody, RegisterRequestBody } from 'apis/account';
// import { User } from 'models/teacher';

const prefix = "AUTH";

export const AccountActionTypes = {
  SIGNIN: `${prefix}/SIGNIN`,
  SIGNUP: `${prefix}/SIGNUP`,
};

export const AccountActionCreators = {
  signIn: createAsyncAction<SignInRequestBody, User>(AccountActionTypes.SIGNIN),
  signUp: createAsyncAction<SignUpRequestBody, User>(AccountActionTypes.SIGNUP),
};
