import { combineReducers } from 'redux';

import { pageReducer } from './pageReducer.js';
import { loadingReducer } from './loadingReducer.js';
import { imagesReducer } from './imagesReducer.js';
import { errorReducer } from './errorReducer.js';
import { statsReducer } from './statsReducer.js';

export const rootReducer = combineReducers({
  pageNo: pageReducer,
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  stats: statsReducer,
});
