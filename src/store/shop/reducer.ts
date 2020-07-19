import { createReducer } from "@reduxjs/toolkit";
import { ShopActionCreators } from "./action";

import { Order, Live, Rest } from "models/order.model";
import { StoreResponse } from "models/shop.model";

// XXXX CRETE_ASYNC_ACTION 만들어야됨.
interface ShopStore {
  store: StoreResponse;
}

const initialState: ShopStore = {
  store: {
    stores: {
      all: [],
      live: [],
    },
  },
};

const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(ShopActionCreators.getAll.success, (state, action) => {
    state.store.stores = action.payload.stores;
  });
});

export default shopReducer;
