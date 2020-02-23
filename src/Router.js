import React, { Suspense, useEffect } from 'react';
import {
    Route, Redirect, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from 'src/containers/Auth/Login';
import SignUp from 'src/containers/Auth/SignUp';
import Loader from 'src/components/DotsLoader';
import About from 'src/containers/About';
import { verify } from 'src/redux/user/actions';

const Home = React.lazy(() => import('src/containers/MainApp/Home'));
const Boards = React.lazy(() => import('src/containers/MainApp/Boards'));
const Profile = React.lazy(() => import('src/containers/MainApp/Profile'));


const ProtectedRoute = ({
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
);
const AuthRoute = ({
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
);

const RouterComponent = ({ isAuthenticated, isLoading, verifyToken }) => {
    useEffect(() => {
        const token = localStorage.getItem('boards') || '';
        if (token) {
            verifyToken(token);
        }
    }, []);

    return (
        <>
            {isLoading && (<Loader type="base" />)}
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={<Loader type="base" />}>
                        <Home isAuthenticated={isAuthenticated} />
                    </Suspense>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                    <AuthRoute path="/login" isAuthenticated={isAuthenticated}>
                            <Login />
                        </AuthRoute>
                <AuthRoute path="/signup" isAuthenticated={isAuthenticated}>
                    <SignUp />
                </AuthRoute>
                <ProtectedRoute path="/boards" isAuthenticated={isAuthenticated}>
                    <Suspense fallback={<Loader type="base" />}>
                        <Boards />
                    </Suspense>
                </ProtectedRoute>
                <ProtectedRoute path="/profile" isAuthenticated={isAuthenticated}>
                    <Suspense fallback={<Loader type="base" />}>
                        <Profile />
                    </Suspense>
                </ProtectedRoute>
            </Switch>
        </>
)};
export default connect(
    state => ({
        isAuthenticated: state.user.isAuthenticated,
        isLoading: state.user.isLoading,
    }),
    {
        verifyToken: verify,
    }
)(RouterComponent);
