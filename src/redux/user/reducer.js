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
    case actions.LOGIN: {
        return {
            ...state,
            ...action.payload,
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
