const actions = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    setUser: user => ({ type: actions.SET_AUTH_USER, payload: user }),

    VERIFY_TOKEN: 'VERIFY_TOKEN',
    verifyToken: () => ({ type: actions.VERIFY_TOKEN }),

    DROP_VERIFICATION: 'DROP_VERIFICATION',
    dropVerification: () => ({ type: actions.DROP_VERIFICATION }),
};

export default actions;
