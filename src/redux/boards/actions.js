export const actions = {
    POST_BOARD_REQUEST: 'POST_BOARD_REQUEST',
    POST_BOARD_SUCCESS: 'POST_BOARD_SUCCESS',
    POST_BOARD_FAILURE: 'POST_BOARD_FAILURE',
};

export const postBoard = data => ({ type: actions.POST_BOARD_REQUEST, payload: data });
