import React from 'react';
import {
    Route, Redirect, Switch,
} from 'react-router-dom';
import Home from 'src/containers/Home';
import Login from 'src/containers/Auth/Login';
import SignUp from 'src/containers/Auth/SignUp';
import Boards from 'src/containers/Boards';

const ProtectedRoute = ({ children, ...rest }) => {
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated
                ? (<Route {...rest}>{children}</Route>)
                : (<Redirect to="/login" />)}
        </>
    );
};
const AuthRoute = ({ children, ...rest }) => {
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated
                ? (<Redirect to="/boards" />)
                : (<Route {...rest}>{children}</Route>)}
        </>
    );
};

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <AuthRoute path="/login">
                <Login />
            </AuthRoute>
            <AuthRoute path="/signup">
                <SignUp />
            </AuthRoute>
            <Route path="/boards">
                <ProtectedRoute>
                    <Boards />
                </ProtectedRoute>
            </Route>
        </Switch>
    );
};
