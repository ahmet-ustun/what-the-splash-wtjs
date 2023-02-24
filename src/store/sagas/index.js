import { takeEvery, put } from 'redux-saga/effects';

function* workerSaga() {
  console.log('hello world!');
  yield put({ type: 'ACTION_FROM_WORKER' });
}

export function* rootSaga() {
  yield takeEvery('HELLO', workerSaga);
}
