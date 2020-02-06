import appActions from 'src/redux/actions';
import actions from './actions';

const initState = {
    id: '',
    username: '',
    email: '',
};

export default (state = initState, action) => {
    switch (action.type) {
    case actions.SET_AUTH_USER: {
        return {
            ...state,
            ...action.payload,
        };
    }
    default: {
        return { ...state };
    }
    }
};
