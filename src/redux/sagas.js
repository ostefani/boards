import { all } from 'redux-saga/effects';
// import authSagas from './user/saga';

export default function* rootSaga() {
    yield all([
        // authSagas(),
    ]);
}
