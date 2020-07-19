import { createReducer } from "@reduxjs/toolkit";
import { AccountActionCreators } from "./action";
import { User } from "models/user.model";

// XXXX CRETE_ASYNC_ACTION 만들어야됨.
interface AccountStore {
  user?: User;
}

const initialState: AccountStore = {};

const accountReducer = createReducer(initialState, (builder) => {
  builder.addCase(AccountActionCreators.signIn.success, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(AccountActionCreators.signUp.success, (state, action) => {
    state.user = action.payload;
  });
});

export default accountReducer;
