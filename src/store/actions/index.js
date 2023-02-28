import { IMAGES, STATS } from '../constants';

export const loadImagesData = () => ({
  type: IMAGES.LOAD,
});

export const setImagesData = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

export const setImagesError = error => ({
  type: IMAGES.LOAD_FAILURE,
  error,
});

export const loadStatsData = id => ({
  type: STATS.LOAD,
  id,
});

export const setStatsData = (id, stats) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  stats,
});

export const setStatsError = id => ({
  type: STATS.LOAD_FAILURE,
  id,
});
