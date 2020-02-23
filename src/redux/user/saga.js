import {
    all, takeEvery, fork, call, put,
} from 'redux-saga/effects';
import { verifyToken } from 'src/services/auth';
import { actions } from './actions';

export function* checkAuthentication() {
    yield takeEvery(actions.CHECK_AUTHENTICATION, function* check(action) {
        try {
            const response = yield call(verifyToken, action.payload);
            yield put({ type: actions.CANCEL_LOADING });
            const { errors, data: user } = response;
            if (errors) {
                console.log('error: ', errors[0].message);
                yield put({ type: actions.LOGOUT });
            }
            else {
                const {
                    verifyToken: {
                        token, _id, email, username,
                    },
                } = user;
                localStorage.setItem('boards', token);
                yield put({
                    type: actions.LOGIN,
                    payload: {
                        id: _id, email, username, isAuthenticated: true,
                    },
                });
            }
        }
        catch (e) {
            console.log('e: ', e);
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(checkAuthentication),
    ]);
}
