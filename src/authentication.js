import React from 'react';
import { connect } from 'react-redux';
import { setLogin, setLogout } from 'src/redux/user/actions';
import { verifyToken } from 'src/services/auth';

export default Component => connect(
    state => ({ isAuthenticated: state.user.isAuthenticated }),
    {
        setLoginAction: setLogin,
        setLogoutAction: setLogout,
    },
)(({
    path,
    children,
    location,
    computedMatch,
    isAuthenticated,
    setLoginAction,
    setLogoutAction,
}) => {
    verifyToken().then(data => {
        console.log('data: ', data);
        const { errors, data: rest } = data;
        if (errors) {
            console.log('error: ', errors[0].message);
            setLogoutAction();
        }
        else {
            const {
                verifyToken: {
                    token, _id, email, username,
                },
            } = rest;
            localStorage.setItem('boards', token);
            setLoginAction({
                id: _id, email, username, isAuthenticated: true,
            });
        }
    })
        .catch(error => {
            console.log('error: ', error);
            setLogoutAction();
        });
    return (
        <Component
            isAuthenticated={isAuthenticated}
            path={path}
            location={location}
            computedMatch={computedMatch}
        >{children}
        </Component>
    );
});
