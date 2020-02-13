export const actions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
};
export const setLogin = user => ({ type: actions.LOGIN, payload: user });

// export const subscribeUser = () => ({ type: actions.SUBSCRIBE_USER });

export const setLogout = () => ({ type: actions.LOGOUT });
