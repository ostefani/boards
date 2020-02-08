export const actions = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    SUBSCRIBE_USER: 'SUBSCRIBE_USER',
    UNSUBSCRIBE_USER: 'UNSUBSCRIBE_USER',
};
export const setUser = user => ({ type: actions.SET_AUTH_USER, payload: user });

export const subscribeUser = () => ({ type: actions.SUBSCRIBE_USER });

export const unsubscribeUser = () => ({ type: actions.UNSUBSCRIBE_USER });
