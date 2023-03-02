import { runSaga } from 'redux-saga';

import * as api from '../../api';
import { handleStatsRequest } from '../statsSaga.js';
import { setStatsData, setStatsError } from '../../actions/index.js';

test('Should load the stats in case of success', async () => {
  const dispatched = [];
  const mockedImageId = '34';
  const mockedStats = '1000';
  const mockedReturn = { downloads: { total: mockedStats } };

  api.fetchStats = jest.fn(() => Promise.resolve(mockedReturn));

  const fakeStore = {
    dispatch: action => dispatched.push(action),
  };

  await runSaga(fakeStore, handleStatsRequest, mockedImageId).done;

  expect(api.fetchStats).toHaveBeenCalled();
  expect(dispatched).toContainEqual(setStatsData(mockedImageId, mockedStats));
});

test('Should handle the errors in case of failure', async () => {
  const dispatched = [];
  const mockedImageId = '34';

  api.fetchStats = jest.fn(() => Promise.reject());

  const fakeStore = {
    dispatch: action => dispatched.push(action),
  };

  await runSaga(fakeStore, handleStatsRequest, mockedImageId).done;

  expect(api.fetchStats).toHaveBeenCalledTimes(3);
  expect(dispatched).toContainEqual(setStatsError(mockedImageId));
});
