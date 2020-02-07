const actions = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    setUser: user => ({ type: actions.SET_AUTH_USER, payload: user }),

    SUBSCRIBE_USER: 'SUBSCRIBE_USER',
    subscribeUser: () => ({ type: actions.SUBSCRIBE_USER }),

    UNSUBSCRIBE_USER: 'UNSUBSCRIBE_USER',
    unsubscribeUser: () => ({ type: actions.UNSUBSCRIBE_USER }),
};

export default actions;
