import Todo from "../../models/todo";
import { createReducer } from "@reduxjs/toolkit";
import { AccountActionCreators } from "./action";

// XXXX CRETE_ASYNC_ACTION 만들어야됨.
interface AccountStore {

}

const initialState: AccountStore = {

};

const accountReducer = createReducer(initialState, (builder) => {
//   builder.addCase(AccountActionCreators.getUser.success, (state, action) => {
//     state.user = action.payload;
//   });
//   builder.addCase(AccountActionCreators.login.success, (state, action) => {
//     state.user = action.payload;
//   });
});

export default accountReducer;
