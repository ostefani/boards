import React from 'react';
import { connect } from 'react-redux';
import { subscribeUser, unsubscribeUser } from 'src/redux/user/actions';
import { verifyToken } from 'src/services/auth';

export default Component => connect(
    state => ({ isAuthenticated: state.user.isAuthenticated }),
    {
        subscribeUserAction: subscribeUser,
        unsubscribeUserAction: unsubscribeUser,
    },
)(({
    path,
    children,
    location,
    computedMatch,
    isAuthenticated,
    subscribeUserAction,
    unsubscribeUserAction,
}) => {
    verifyToken().then(data => {
        const { errors } = data;
        if (errors) {
            console.log('error: ', errors[0].message);
            unsubscribeUserAction();
        }
        else subscribeUserAction();
    })
        .catch(error => {
            console.log('e: ', error);
            unsubscribeUserAction();
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
