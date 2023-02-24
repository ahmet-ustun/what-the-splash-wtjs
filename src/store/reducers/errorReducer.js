import { IMAGES } from '../constants/index.js';

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAILURE:
      return action.error;

    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};
