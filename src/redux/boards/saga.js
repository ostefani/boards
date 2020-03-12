import {
    all, takeEvery, fork, call, put,
} from 'redux-saga/effects';
import { getBoards, createBoard } from 'src/services/boards';
import { actions } from './actions';

export function* postBoard() {
    yield takeEvery(actions.POST_BOARD, function* post(action) {
        try {
            const response = yield call(createBoard, action.payload);
            const { errors, data: board } = response;
            if (errors) {
                console.log('error: ', errors[0].message);
                yield put({ type: actions.POST_BOARD_FAILURE });
            }
            else {
                const {
                    createBoard: {
                        _id, title,
                    },
                } = board;
                yield put({
                    type: actions.POST_BOARD_SUCCESS,
                    payload: { id: _id, title },
                });
            }
        }
        catch (e) {
            console.log('e: ', e);
        }
    });
}

export default function* rootSaga() {
    // all is blocking, but fork is not blocking
    yield all([
        fork(postBoard),
    ]);
}
