import createAsyncAction from "../../utils/createAsyncAction";
import { StoreResponse } from "models/shop.model";

const prefix = "Shop";

export const ShopActionTypes = {
  GET_ALL: `${prefix}/GET_ALL`,
};

export const ShopActionCreators = {
  getAll: createAsyncAction<undefined, StoreResponse>(ShopActionTypes.GET_ALL),
};
