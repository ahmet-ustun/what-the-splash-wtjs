import { all } from 'redux-saga/effects';

import { watchImagesLoad } from './imagesSaga.js';
import { watchStatsRequest } from './statsSaga.js';

export function* rootSaga() {
  yield all([watchImagesLoad(), watchStatsRequest()]);
}
