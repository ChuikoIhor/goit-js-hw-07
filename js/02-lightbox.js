import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

const galleryLinkEls = galleryItems
  .map(
    ({ preview, original, description }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
  )
  .join('');

listEl.insertAdjacentHTML('afterbegin', galleryLinkEls);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
