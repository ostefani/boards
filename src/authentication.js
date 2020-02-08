import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authActions from 'src/redux/user/actions';
import { verifyToken } from 'src/services/auth';

const { subscribeUser, unsubscribeUser } = authActions;

export default Component => (({
    path, children, location, computedMatch,
}) => {
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
        <Component
            isAuthenticated={isAuthenticated}
            path={path}
            location={location}
            computedMatch={computedMatch}
        >{children}
        </Component>
    );
});
