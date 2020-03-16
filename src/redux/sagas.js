import { all } from 'redux-saga/effects';
import userSagas from './user/saga';

export default function* rootSaga() {
    yield all([
        userSagas(),
    ]);
}
