import { all } from 'redux-saga/effects';
import userSagas from './user/saga';
import boardsSagas from './boards/saga';

export default function* rootSaga() {
    yield all([
        userSagas(),
        boardsSagas(),
    ]);
}
