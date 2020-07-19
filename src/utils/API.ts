import axios from "axios";
import { pickBy } from "lodash-es";
import { message } from "antd";

const parsingEmptyValueParams = (params: any) =>
  pickBy(params, (value) => value != null && value !== "");

const API = axios.create();

API.defaults.baseURL =
  process.env.server ||
  "http://ec2-13-124-58-180.ap-northeast-2.compute.amazonaws.com:5000";

API.interceptors.request.use(
  (config) => {
    const parsedParams = parsingEmptyValueParams(config.params);
    config.params = parsedParams;

    const isAuthAPI = config.headers.isAuth || true;
    delete config.headers.isAuth;

    const accessToken = window.localStorage.getItem("access_token");

    if (accessToken && isAuthAPI === true) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const NOT_AUTHORIZED_HTTP_CODE = 401;

API.interceptors.response.use(
  (response) => {
    if (response && response.config.method !== "get") {
      message.success("요청이 성공적으로 처리되었습니다.", 1.5);
    }
    return response.data;
  },
  (error) => {
    const { response } = error;
    const originalRequest = error.config;

    if (response && response.status === NOT_AUTHORIZED_HTTP_CODE) {
      // 인증오류가 났을시

      const refreshToken = window.localStorage.getItem("refresh_token");

      if (!refreshToken) {
        // 모종의 이유로 리프레쉬토큰마저 없음.

        message.error("로그인기간이 만료되었습니다. 다시 로그인해주세요.", 1.5);
        window.location.replace("/signin");

        return Promise.reject(error);
      }

      return axios
        .post(`${API.defaults.baseURL}/accounts/token/refresh/`, {
          refresh: refreshToken,
        })
        .then((res) => {
          const { access, refresh } = res.data;

          localStorage.setItem("access_token", access);
          localStorage.setItem("refresh_token", refresh);

          error.config.headers["Authorization"] = `Bearer ${access}`;

          // XXXX 요거 잘 처리되는지확인F
          return axios(error.config);
        })
        .catch((refreshTokenError) => {
          if (
            refreshTokenError.response &&
            refreshTokenError.response.status === NOT_AUTHORIZED_HTTP_CODE
          ) {
            message.error(
              "로그인기간이 만료되었습니다. 다시 로그인해주세요.",
              1.5
            );
            window.location.replace("/signin");
            return Promise.reject(error);
          }

          message.error("알수 없는 오류가 발생했습니다.");
          return Promise.reject(error);

          //XXXX 401 이 아닐때 에러처리 필요
        });
    }

    message.error("요청이 실패하였습니다.", 1.5);
    return Promise.reject(error);
  }
);

export default API;
