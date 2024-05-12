import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGallaryItem } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.form-field');
const loaderEl = document.querySelector('.loader');

searchFormEl.addEventListener('submit', onSearchFormSubmit);
function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.error({
      timeout: 2000,
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#fff',
      backgroundColor: '#d37a7a',
      close: false,
      closeOnClick: true,
    });
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
        iziToast.error({
          timeout: 2000,
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fff',
          backgroundColor: '#d37a7a',
          close: false,
          closeOnClick: true,
        });
      }
      const markup = createGallaryItem(imagesData.hits);

      galleryEl.innerHTML = markup;

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      // lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}
