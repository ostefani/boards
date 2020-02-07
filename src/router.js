import React from 'react';
import {
    Route, Redirect, Switch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from 'src/containers/Home';
import Login from 'src/containers/Auth/Login';
import SignUp from 'src/containers/Auth/SignUp';
import Boards from 'src/containers/Boards';
import Profile from 'src/containers/Profile';
import { verifyToken } from 'src/services/auth';
import authActions from 'src/redux/user/actions';

const { subscribeUser, unsubscribeUser } = authActions;


const ProtectedRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    verifyToken().then(data => {
        const { errors } = data;
        if (errors) {
            console.log('error: ', errors[0].message);
            dispatch(unsubscribeUser());
        }
        else {
            dispatch(subscribeUser());
        }
    })
        .catch(error => {
            console.log('e: ', error);
            dispatch(unsubscribeUser());
        });
    return (
        <>
            {isAuthenticated
                ? (<Route {...rest}>{children}</Route>)
                : (<Redirect to="/login" />)}
        </>
    );
};
const AuthRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    verifyToken().then(data => {
        const { errors } = data;
        if (errors) {
            console.log('error: ', errors[0].message);
            dispatch(unsubscribeUser());
        }
        else {
            dispatch(subscribeUser());
        }
    })
        .catch(error => {
            console.log('e: ', error);
            dispatch(unsubscribeUser());
        });
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
            <ProtectedRoute path="/boards">
                <Boards />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
                <Profile />
            </ProtectedRoute>
        </Switch>
    );
};
