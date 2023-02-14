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
  const imageClassEl = document.querySelector('.gallery__image');
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
      <img src=${event.target.dataset.source}>
  `);

  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      return instance.close();
    }
  });
};

divEl.addEventListener('click', handleSubmit);
