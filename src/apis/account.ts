import API from "../utils/API";

export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface AuthAPIResponse {
  username: string;
  phoneNumber: string;
  id: number;
  token: string;
}

const prefix = "/auth";

export const login = (body: LoginRequestBody): Promise<AuthAPIResponse> => {
  return API.post(
    `${prefix}/login/`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export interface RegisterRequestBody {
  username: string;
  password: string;
  phoneNumber: string;
}

export const register = (
  body: RegisterRequestBody
): Promise<AuthAPIResponse> => {
  return API.post(
    `${prefix}/registration/`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export const getUser = () => {
  return API.get(`${prefix}/user/`);
};

export default {
  login,
  register,
  getUser,
};
