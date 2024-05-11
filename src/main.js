import { createGallaryItem } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const galleryEl = document.querySelector('.gallery');
const searchFormEl = document.querySelector('.form-field');
// const loaderEl = document.querySelector('.');

searchFormEl.addEventListener('submit', onSearchFormSubmit);
function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  console.log(searchQuery);
  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
  }
}
fetchPhotosByQuery()
  .then(imagesData => {
    const markup = createGallaryItem(imagesData.hits);
    galleryEl.innerHTML = markup;
  })
  .catch(error => console.log(error));
