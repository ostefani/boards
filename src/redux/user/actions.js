const actions = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    setUser: user => ({ type: actions.SET_AUTH_USER, payload: user }),

    VERIFY_TOKEN: 'VERIFY_TOKEN',
    VERIFY_TOKEN_SUCCESS: 'VERIFY_TOKEN_SUCCESS',
    VERIFY_TOKEN_ERROR: 'VERIFY_TOKEN_ERROR',

    verifyToken: token => ({ type: actions.VERIFY_TOKEN, payload: token }),
};

export default actions;
