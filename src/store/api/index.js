const URL1 = process.env.REACT_APP_UNSPLASH_URL_1;
const URL2 = process.env.REACT_APP_UNSPLASH_URL_2;
const KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const fetchImages = async pageNo => {
  const response = await fetch(`${URL1}?client_id=${KEY}&page=${pageNo}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors);
  }

  return data;
};

export const fetchStats = async imageId => {
  const response = await fetch(`${URL2}/${imageId}/statistics?client_id=${KEY}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors);
  }

  return data;
};
