const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43826847-f350fa9fd32410ec3fefedfc5';

export const fetchPhotosByQuery = (q = 'flowers') => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error('Error!');
    }
    return response.json();
  });
};
