import { createGallaryItem } from '../src/js/render-functions.js';

import { fetchPhotosByQuery } from '../src/js/pixabay-api.js';

fetchPhotosByQuery()
  .then(imagesDate => {
    const markup = createGallaryItem(imagesDate);
    console.log(markup);
  })
  .catch(error => console.log(error));
