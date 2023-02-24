import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer.js';
import { imagesReducer } from './imagesReducer.js';
import { errorReducer } from './errorReducer.js';

export const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
});
