import { galleryItems } from './gallery-items.js';

const divEl = document.querySelector('.gallery');

const galleryItemEls = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join('');

divEl.insertAdjacentHTML('afterbegin', galleryItemEls);

const handleSubmit = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
      <img src=${event.target.dataset.source}>
  `);

  instance.show();

  const handleKeydown = event => {
    if (event.code === 'Escape') {
      document.removeEventListener('keydown', handleKeydown);
      return instance.close();
    }
  };

  document.addEventListener('keydown', handleKeydown);
};

divEl.addEventListener('click', handleSubmit);
