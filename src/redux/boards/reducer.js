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
    case actions.GET_BOARDS_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case actions.GET_BOARDS_SUCCESS: {
        return {
            ...state,
            boards: [...action.payload],
            isLoading: false,
        };
    }
    case actions.GET_BOARDS_FAILURE: {
        return {
            ...state,
            isLoading: false,
        };
    }
    case actions.GET_BOARD_DATA_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case actions.GET_BOARD_DATA_SUCCESS: {
        console.log('action.GET_BOARD_DATA_SUCCESS: ', action.payload);
        return {
            ...state,
            boards: [...state.boards],
            isLoading: false,
        };
    }
    case actions.GET_BOARD_DATA_FAILURE: {
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
