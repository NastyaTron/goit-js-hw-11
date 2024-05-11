export const createGallaryItem = images => {
  return images
    .map(image => {
      `<div class="js-section-images">
      <div class="js-card-image">
        <img
          src="${image.webformatURL}"
          alt="${image.tags}"
          class="js-gallery-img"
        />
        <div class="js-group-text">
          <small class="js-text"
            >Likes <span class="js-span-text">${image.likes}</span></small
          >
          <small class="js-text"
            >Views <span class="js-span-text">${image.views}</span></small
          >
          <small class="js-text"
            >Comments <span class="js-span-text">${image.comments}</span></small
          >
          <small class="js-text"
            >Downloads
            <span class="js-span-text">${image.downloads}</span></small
          >
        </div>
      </div>
    </div>`;
    })
    .join('');
};
