import API from "../utils/API";
import { User } from "models/user.model";

export interface SignInRequestBody {
  username: string;
  password: string;
}

const prefix = "/auth";

export const signIn = (body: SignInRequestBody): Promise<User> => {
  return API.post(
    `${prefix}/signIn/`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export interface SignUpRequestBody {
  username: string;
  password: string;
  phoneNumber: string;
}

export const signUp = (body: SignUpRequestBody): Promise<User> => {
  return API.post(
    `${prefix}/signUp/`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export default {
  signIn,
  signUp,
};
