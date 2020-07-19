import { createReducer } from "@reduxjs/toolkit";
import { OrderActionCreators } from "./action";

import { Order } from "models/order.model";

// XXXX CRETE_ASYNC_ACTION 만들어야됨.
interface OrderStore {
  items?: Order[];
}

const initialState: OrderStore = {
  items: [],
};

const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(OrderActionCreators.getAll.success, (state, action) => {
    state.items = action.payload;
  });
});

export default orderReducer;
