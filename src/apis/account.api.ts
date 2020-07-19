import API from "../utils/API";
import { User } from "models/user.model";

export interface AuthResponse {
  access_token: string;
  message: string;
  refresh_token: string;
}

export interface SignInRequestBody {
  userName: string;
  password: string;
}

const prefix = "/auth";

export const signIn = (body: SignInRequestBody): Promise<AuthResponse> => {
  return API.post(
    `${prefix}/signIn`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export interface SignUpRequestBody {
  userName: string;
  password: string;
  phoneNumber: string;
  address: string;
}

export const signUp = (body: SignUpRequestBody): Promise<AuthResponse> => {
  return API.post(
    `${prefix}/signUp`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export default {
  signIn,
  signUp,
};
