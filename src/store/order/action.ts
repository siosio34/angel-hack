import createAsyncAction from "../../utils/createAsyncAction";

const prefix = "ORDER";

export const OrderActionTypes = {
  GET_ALL: `${prefix}/GET_ALL`,
};

export const OrderActionCreators = {
  getAll: createAsyncAction<undefined, any>(OrderActionTypes.GET_ALL),
};
