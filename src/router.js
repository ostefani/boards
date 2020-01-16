import React from 'react';
import {
    Route, Redirect, Switch, withRouter,
} from 'react-router-dom';
import Home from 'src/containers/Home';
import Auth from 'src/containers/Auth';
import Boards from 'src/containers/Boards';
console.log('Auth: ', Auth);

const ProtectedRoute = ({ children, ...rest }) => {
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated
                ? (<Route {...rest}>{children}</Route>)
                : (<Redirect to="/auth" />)}
        </>
    );
};

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/auth/">
                <Auth />
            </Route>
            <Route path="/boards">
                <ProtectedRoute>
                    <Boards />
                </ProtectedRoute>
            </Route>
        </Switch>
    );
};
