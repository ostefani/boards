import appActions from 'src/redux/actions';
import { actions } from './actions';

const initState = {
    id: '',
    username: '',
    email: '',
    isAuthenticated: false,
    isLoading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
    case actions.CHECK_AUTHENTICATION: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case actions.CANCEL_LOADING: {
        return {
            ...state,
            isLoading: false,
        };
    }
    case actions.LOGIN: {
        return {
            ...state,
            ...action.payload,
            isLoading: false,
            isAuthenticated: true,
        };
    }
    case actions.LOGOUT: {
        return {
            ...initState,
        };
    }
    default: {
        return { ...state };
    }
    }
};
