import { actions } from './actions';

const initState = {
    boards: [],
    isLoading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
    case actions.POST_BOARD_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case actions.POST_BOARD_SUCCESS: {
        return {
            boards: [...state.boards, action.payload],
            isLoading: false,
        };
    }
    case actions.POST_BOARD_FAILURE: {
        return {
            ...state,
            isLoading: false,
        };
    }
    default: {
        return { ...state };
    }
    }
};
