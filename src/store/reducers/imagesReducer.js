import { IMAGES } from "../constants";

export const imagesReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }
  return state;
};
