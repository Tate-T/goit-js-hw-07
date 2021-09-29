import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox'

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const listItemsMarkup = createListMarkup(galleryItems);

function createListMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
      <a 
        class="gallery__link" 
        href = "${original}">
          <img 
          class="gallery__image" 
          src="${preview}" 
          data-source="${original}" 
          alt="${description}"
          />
      </a>
    </div>
    `
  }).join('');
}

gallery.insertAdjacentHTML('beforeend', listItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250
});
