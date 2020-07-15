import React, { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { render } from 'react-dom';
import { RootState } from 'store/configureStore';
import { useSelector } from 'react-redux';

const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    // const accountStore = useSelector((store: RootState) => store.account);

    // const { user } = accountStore;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('access_token') ? children : children
            }
        />
    );
};

export default AuthRoute;
