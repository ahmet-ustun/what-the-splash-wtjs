import { call, fork, put, take } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchStats } from '../api';
import { loadStatsData, setStatsData, setStatsError } from '../actions';

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadStatsData(id));
      const response = yield call(fetchStats, id);
      yield put(setStatsData(id, response.downloads.total));

      return true;
    } catch (error) {}
  }
  yield put(setStatsError(id));
}

export function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}
