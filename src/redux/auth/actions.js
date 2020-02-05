const actions = {
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_REQUEST_SUCCESS: 'REGISTER_REQUEST_SUCCESS',
    REGISTER_REQUEST_ERROR: 'REGISTER_REQUEST_ERROR',

    postUser: data => ({ type: actions.REGISTER_REQUEST, payload: data }),

    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',

    fetchUser: data => ({ type: actions.LOGIN_REQUEST, payload: data }),

    VERIFY_TOKEN: 'VERIFY_TOKEN',
    VERIFY_TOKEN_SUCCESS: 'VERIFY_TOKEN_SUCCESS',
    VERIFY_TOKEN_ERROR: 'VERIFY_TOKEN_ERROR',

    verifyToken: token => ({ type: actions.VERIFY_TOKEN, payload: token }),
};

export default actions;
