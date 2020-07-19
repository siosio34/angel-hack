import API from "../utils/API";


const prefix = "/stores";

export const getAll = (): Promise<any> => {
  return API.get(`${prefix}`);
};

export default {
  getAll,
};
