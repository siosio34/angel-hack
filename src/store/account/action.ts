import createAsyncAction from '../../utils/createAsyncAction';
// import { LoginRequestBody, RegisterRequestBody } from 'apis/account';
// import { User } from 'models/teacher';

const prefix = 'ACCOUNT';

export const AccountActionTypes = {
    LOGIN: `${prefix}/LOGIN`,
    REGISTER: `${prefix}/REGISTER`,
    GetUser: `${prefix}/GetUser`,
};

export const AccountActionCreators = {
    // login: createAsyncAction<LoginRequestBody, any>(AccountActionTypes.LOGIN),
    // register: createAsyncAction<RegisterRequestBody, any>(
    //     AccountActionTypes.REGISTER,
    // ),
    // getUser: createAsyncAction<undefined, User>(
    //     AccountActionTypes.GetUser,
    // ),
};
