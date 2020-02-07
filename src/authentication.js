import React, { useState } from 'react';
import { connect } from 'react-redux';
import { verifyToken } from 'src/services/auth';
import authActions from 'src/redux/user/actions';

const { setUser } = authActions;

export default (Component) => {
    console.log('props in auth: ', props);
    console.log('Component: ', Component);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    let isAuthenticated = false;
    verifyToken().then(data => {
        const { data: rest, errors } = data;
        if (errors) {
            console.log('error: ', errors[0].message);
        }
        else {
            const {
                verifyToken: {
                    token, _id, username, email,
                },
            } = rest;
            isAuthenticated = true;
        }
    })
    .catch(error => console.log('e: ', error));
    return function(props) {
        return <Component isAuthenticated={isAuthenticated} {...props} />;
    }
};

/*export default connect(
        state => ({
            user: state.user,
        }),
        {
            setUserAction: setUser,
        },
    )(WithAuthentication);*/
