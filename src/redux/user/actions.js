export const actions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CANCEL_LOADING: 'CANCEL_LOADING',
    CHECK_AUTHENTICATION: 'CHECK_AUTHENTICATION',
};

export const setLogin = user => ({ type: actions.LOGIN, payload: user });

export const setLogout = () => ({ type: actions.LOGOUT });

export const verify = token => ({ type: actions.CHECK_AUTHENTICATION, payload: token });
