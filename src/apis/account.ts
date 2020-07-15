import API from "../utils/API";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

const prefix = "/accounts";

export const login = (body: LoginRequestBody): Promise<LoginResponse> => {
  return API.post(
    `${prefix}/login/`,
    { ...body },
    { headers: { isAuth: false } }
  );
};

export interface RegisterRequestBody {
  email: string;
  password: string;
  phone_number: string;
  username: string;
}

export const register = (body: RegisterRequestBody) => {
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
