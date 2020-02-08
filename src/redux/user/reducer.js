import appActions from 'src/redux/actions';
import { actions } from './actions';

const initState = {
    id: '',
    username: '',
    email: '',
    isAuthenticated: false,
};

export default (state = initState, action) => {
    switch (action.type) {
    case actions.SET_AUTH_USER: {
        return {
            ...state,
            ...action.payload,
        };
    }
    case actions.SUBSCRIBE_USER: {
        return {
            ...state,
            isAuthenticated: true,
        };
    }
    case actions.UNSUBSCRIBE_USER: {
        return {
            ...state,
            isAuthenticated: false,
        };
    }
    default: {
        return { ...state };
    }
    }
};
