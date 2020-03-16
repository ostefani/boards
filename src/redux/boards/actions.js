export const actions = {
    POST_BOARD_REQUEST: 'POST_BOARD_REQUEST',
    POST_BOARD_SUCCESS: 'POST_BOARD_SUCCESS',
    POST_BOARD_FAILURE: 'POST_BOARD_FAILURE',

    GET_BOARDS_REQUEST: 'GET_BOARDS_REQUEST',
    GET_BOARDS_SUCCESS: 'GET_BOARDS_SUCCESS',
    GET_BOARDS_FAILURE: 'GET_BOARDS_FAILURE',
};

export const postBoard = data => ({ type: actions.POST_BOARD_REQUEST, payload: data });

export const getBoards = () => ({ type: actions.GET_BOARDS_REQUEST });
