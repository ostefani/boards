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

import WithLoading from './withLoading';

const Home = React.lazy(() => import('src/containers/MainApp/Home'));
const Boards = React.lazy(() => import('src/containers/MainApp/Boards'));
const Profile = React.lazy(() => import('src/containers/MainApp/Profile'));
const Board = React.lazy(() => import('src/containers/MainApp/Board'));

const LazyHome = (props) => <WithLoading component={Home} {...props} />
const LazyBoards = (props) => <WithLoading component={Boards} {...props} />
const LazyProfile = (props) => <WithLoading component={Profile} {...props} />
const LazyBoard = (props) => <WithLoading component={Board} {...props} />


const ProtectedRoute = ({
    children, isAuthenticated, path, ...props
}) => {

    return (
    <>
        {isAuthenticated
            ? (
                <Route path={path}>
                    {React.cloneElement(children, props)}
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
                    <LazyHome isAuthenticated={isAuthenticated} />
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
                <ProtectedRoute path="/:username/boards/:id" isAuthenticated={isAuthenticated}>

                        <LazyBoard
                            /*title='This is a very very very long title This is a very very very long title This is a very very very long title'
                            tasks={[{
                                title: 'To do',
                                groupOfTasks: [{
                                    title: 'Provide decorator for each header story',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci odio, euismod sed finibus vel, efficitur ut eros. In dignissim sed augue vel malesuada. Nam id purus nulla. Quisque nec lobortis metus.',
                                    date: new Date().toLocaleDateString(),
}, {
                                    title: 'Provide decorator for each header story',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci odio, euismod sed finibus vel, efficitur ut eros. In dignissim sed augue vel malesuada. Nam id purus nulla. Quisque nec lobortis metus.',
                                    date: new Date().toLocaleDateString(),
}, {
                                    title: 'Provide decorator for each header story',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci odio, euismod sed finibus vel, efficitur ut eros. In dignissim sed augue vel malesuada. Nam id purus nulla. Quisque nec lobortis metus.',
                                    date: new Date().toLocaleDateString(),
}] }, { title: 'to some' }]}*/
                        />

                </ProtectedRoute>
                <ProtectedRoute path="/:username/boards" isAuthenticated={isAuthenticated}>
                    <LazyBoards />
                </ProtectedRoute>
                <ProtectedRoute path="/:username/profile" isAuthenticated={isAuthenticated}>
                    <LazyProfile />
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
