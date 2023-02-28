import { STATS } from '../constants';

export const statsReducer = (state = {}, action) => {
  switch (action.type) {
    case STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          stats: null,
          error: false,
        },
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          stats: action.stats,
          error: false,
        },
      };
    case STATS.LOAD_FAILURE:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          stats: null,
          error: true,
        },
      };
    default:
      return state;
  }
};
