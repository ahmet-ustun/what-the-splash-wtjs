import { runSaga } from 'redux-saga';

import * as api from '../../api';
import { getPageNo, handleImagesLoad } from '../imagesSaga.js';
import { setImagesData, setImagesError } from '../../actions';

test('Selector gives back the page number', () => {
  const pageNumber = 1;
  const state = { pageNo: pageNumber };
  const result = getPageNo(state);

  expect(result).toBe(pageNumber);
});

test('Should load the images in case of success', async () => {
  const dispatched = [];
  const mockedImages = ['image_1', 'image_2'];

  api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

  const fakeStore = {
    getState: () => ({ pageNo: 1 }),
    dispatch: action => dispatched.push(action),
  };

  await runSaga(fakeStore, handleImagesLoad).done;

  expect(api.fetchImages).toHaveBeenCalled();
  expect(dispatched).toContainEqual(setImagesData(mockedImages));
});

test('Should handle the errors in case of failure', async () => {
  const dispatched = [];
  const mockedError = 'Throw an error!';

  api.fetchImages = jest.fn(() => Promise.reject(mockedError));

  const fakeStore = {
    getState: () => ({ pageNo: 1 }),
    dispatch: action => dispatched.push(action),
  };

  await runSaga(fakeStore, handleImagesLoad).done;

  expect(api.fetchImages).toHaveBeenCalled();
  expect(dispatched).toContainEqual(setImagesError(mockedError));
});
