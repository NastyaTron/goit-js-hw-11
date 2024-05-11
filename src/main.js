import { fetchPhotosByQuery } from './pixabay-api.js';
fetchPhotosByQuery().then(images => {
  console.log(images.resu);
});
