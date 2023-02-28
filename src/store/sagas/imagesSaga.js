import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchImages } from '../api';
import { IMAGES } from '../constants';
import { setImagesData, setImagesError } from '../actions';

export const getPageNo = state => state.pageNo;

export function* handleImagesLoad() {
  try {
    const pageNo = yield select(getPageNo);
    const images = yield call(fetchImages, pageNo);
    yield put(setImagesData(images));
  } catch (error) {
    yield put(setImagesError(error.toString()));
  }
}

export function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
