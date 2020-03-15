import {
    all, takeEvery, fork, call, put,
} from 'redux-saga/effects';
import { getBoards, createBoard } from 'src/services/boards';
import { actions } from './actions';

export function* postBoard() {
    yield takeEvery(actions.POST_BOARD_REQUEST, function* post(action) {
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

export function* fetchBoards() {
    yield takeEvery(actions.GET_BOARDS_REQUEST, function* get(action) {
        try {
            const response = yield call(getBoards);

            const { errors, data: boards } = response;
            if (errors) {
                console.log('error: ', errors[0].message);
                yield put({ type: actions.GET_BOARDS_FAILURE });
            }
            else {
                const {
                    getBoards: data,
                } = boards;
                console.log('data: ', data);
                yield put({
                    type: actions.GET_BOARDS_SUCCESS,
                    payload: data,
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
        fork(fetchBoards),
    ]);
}
