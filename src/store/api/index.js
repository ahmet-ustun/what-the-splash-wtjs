const URL1 = "https://api.unsplash.com/topics/xHxYTMHLgOc/photos";
const URL2 = "https://api.unsplash.com/photos";
const KEY = "MY2EIzxWnC1EHsMQfKOyjSqDB2GuMc9KEOHyqPwSrnU";

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
