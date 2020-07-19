import { createReducer } from "@reduxjs/toolkit";
import { ShopActionCreators } from "./action";

import { Order } from "models/order.model";

// XXXX CRETE_ASYNC_ACTION 만들어야됨.
interface ShopStore {
  items?: [];
}

const initialState: ShopStore = {
  items: [],
};

const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(ShopActionCreators.getAll.success, (state, action) => {
    state.items = action.payload;
  });
});

export default shopReducer;
