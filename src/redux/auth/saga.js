import {
    all, takeEvery, put, fork, call,
} from 'redux-saga/effects';
import { fetchUser, postUser } from 'services/auth';
import { saveToken } from 'helpers/utility';
import appActions from 'redux/actions';
import actions from './actions';

export function* loginRequest() {
    yield takeEvery(actions.LOGIN_REQUEST, function* fetchUser(action) {
        try {
            const response = yield call(loginUser, action.payload);
            if (response.token) {
                saveToken(response.token);
                yield put({
                    type: actions.LOGIN_REQUEST_SUCCESS,
                    payload: { token: response.token, email: action.payload.email },
                });
            }
            else if (response.errors || response.message) {
                yield put({ type: appActions.APP_ERROR, error: (response.message || 'Login or password is incorrect') });
            }
        }
        catch (error) {
            console.log('error: ', error);
            yield put({ type: appActions.APP_ERROR, payload: { error: error.message } });
        }
    });
}
export function* signupRequest() {
    yield takeEvery(actions.REGISTER_REQUEST, function* postUser(action) {
        try {
            const response = yield call(postUser, action.payload);
            if (response.token) {
                saveToken(response.token);
                yield put({
                    type: actions.LOGIN_REQUEST_SUCCESS,
                    payload: { token: response.token, email: action.payload.email },
                });
            }
            else if (response.errors || response.message) {
                yield put({ type: appActions.APP_ERROR, error: (response.message || 'Login or password is incorrect') });
            }
        }
        catch (error) {
            console.log('error: ', error);
            yield put({ type: appActions.APP_ERROR, payload: { error: error.message } });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(loginRequest),
        fork(signupRequest),
    ]);
}
