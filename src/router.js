import React, { Suspense } from 'react';
import {
    Route, Redirect, Switch,
} from 'react-router-dom';
import Login from 'src/containers/Auth/Login';
import SignUp from 'src/containers/Auth/SignUp';
import WithAuthentication from './Authentication';
import Loader from 'src/components/DotsLoader';

const Home = React.lazy(() => import('src/containers/Home'));
const Boards = React.lazy(() => import('src/containers/Boards'));
const Profile = React.lazy(() => import('src/containers/Profile'));


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

export default WithAuthentication(({ isAuthenticated, isLoading }) => {
    return (
        <>
        {isLoading
        ? (<Loader />)
        : (
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={<Loader type="base" />}>
                        <Home isAuthenticated={isAuthenticated} />
                    </Suspense>
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
        )}
        </>
)});
