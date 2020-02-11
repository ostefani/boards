import React from 'react';
import {
    Route, Redirect, Switch,
} from 'react-router-dom';
import Home from 'src/containers/Home';
import Login from 'src/containers/Auth/Login';
import SignUp from 'src/containers/Auth/SignUp';
import Boards from 'src/containers/Boards';
import Profile from 'src/containers/Profile';
import WithReduxAuth from './authentication';

const ProtectedRoute = WithReduxAuth(({
    children, isAuthenticated, path, location, computedMatch,
}) => (
    <>
        {isAuthenticated
            ? (
                <Route path={path} location={location} computedMatch={computedMatch}>
                    {children}
                </Route>
            )
            : (<Redirect to="/login" />)}
    </>
));
const AuthRoute = WithReduxAuth(({
    children, isAuthenticated, path, location, computedMatch,
}) => (
    <>
        {isAuthenticated
            ? (<Redirect to="/boards" />)
            : (
                <Route path={path} location={location} computedMatch={computedMatch}>
                    {children}
                </Route>
            )}
    </>
));

export default () => (
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
        <ProtectedRoute path="/boards">
            <Boards />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
            <Profile />
        </ProtectedRoute>
    </Switch>
);
