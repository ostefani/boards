import React, { Suspense, useEffect } from 'react';
import {
    Route, Redirect, Switch
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
}) => {
    return (
    <>
        {isAuthenticated
            ? (
                <Route path={path} location={location} computedMatch={computedMatch}>
                    {children}
                </Route>
            )
            : (<Redirect to="/login" />)}
    </>
)};

const AuthRoute = ({
    children, isAuthenticated, path, location, computedMatch, username
}) => {
    return (
    <>
        {isAuthenticated
            ? (<Redirect to={`/${username}/boards`} />)
            : (
                <Route path={path} location={location} computedMatch={computedMatch}>
                    {children}
                </Route>
            )}
    </>
)};


const RouterComponent = ({ username, isAuthenticated, isLoading, verifyToken, }) => {
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
                    <AuthRoute path="/login" isAuthenticated={isAuthenticated} username={username}>
                            <Login />
                        </AuthRoute>
                <AuthRoute path="/signup" isAuthenticated={isAuthenticated} username={username}>
                    <SignUp />
                </AuthRoute>
                <ProtectedRoute path="/:username/boards" isAuthenticated={isAuthenticated}>
                    <Suspense fallback={<Loader type="base" />}>
                        <Boards />
                    </Suspense>
                </ProtectedRoute>
                <ProtectedRoute path="/:username/profile" isAuthenticated={isAuthenticated}>
                    <Suspense fallback={<Loader type="base" />}>
                        <Profile />
                    </Suspense>
                </ProtectedRoute>
            </Switch>
        </>
)};
export default connect(
    ({ user }) => ({
        isAuthenticated: user.isAuthenticated,
        isLoading: user.isLoading,
        username: user.username,
    }),
    {
        verifyToken: verify,
    }
)(RouterComponent);
