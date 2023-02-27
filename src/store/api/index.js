const URL = process.env.REACT_APP_UNSPLASH_URL;
const KEY = `?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

export const fetchImages = async pageNo => {
  const response = await fetch(`${URL}${KEY}&page=${pageNo}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors);
  }

  return data;
};
