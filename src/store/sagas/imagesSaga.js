import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchImages } from '../api';
import { IMAGES } from '../constants';
import { setImages, setError } from '../actions';

const getPageNo = state => state.pageNo;

function* handleImagesLoad() {
  try {
    const pageNo = yield select(getPageNo);
    const images = yield call(fetchImages, pageNo);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
