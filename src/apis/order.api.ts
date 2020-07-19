import API from "../utils/API";
import { User } from "models/user.model";

const prefix = "/orders";

export const getAll = (): Promise<User> => {
  return API.get(`${prefix}`);
};

export default {
  getAll,
};
