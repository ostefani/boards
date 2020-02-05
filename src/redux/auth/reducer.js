import { getToken } from 'helpers/utility';
import appActions from 'redux/actions';
import actions from './actions';

const initState = {
    isLoading: false,
    isAuthenticated: getToken() && getToken().length > 0,
    error: '',
    isForgotSuccess: false,
    isPasswordChanged: false,
    name: '',
};

export default function authReducer(state = initState, action) {
    switch (action.type) {
    case appActions.CLEAR_ERROR: {
        return {
            ...state,
            error: '',
        };
    }
    case actions.LOGIN_REQUEST: {
        return {
            ...state,
            isLoading: true,
            error: '',
        };
    }
    case actions.LOGIN_REQUEST_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            isAuthenticated: true,
        };
    }
    case appActions.APP_ERROR: {
        return {
            ...state,
            isAuthenticated: false,
            isLoading: false,
            error: action.error,
        };
    }
    case actions.LOGOUT: {
        return { ...initState };
    }
    default: {
        return { ...state };
        }
    }
}
