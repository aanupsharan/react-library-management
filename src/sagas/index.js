import { fork } from 'redux-saga/effects';

import usersSaga from './Users.sagas';
import booksSaga from './Books.sagas';

export default function* rootSaga() {
    yield [
        fork(usersSaga),
        fork(booksSaga)
    ];
}
