import createAsyncAction from "../../utils/createAsyncAction";

const prefix = "Shop";

export const ShopActionTypes = {
  GET_ALL: `${prefix}/GET_ALL`,
};

export const ShopActionCreators = {
  getAll: createAsyncAction<undefined, any>(ShopActionTypes.GET_ALL),
};
