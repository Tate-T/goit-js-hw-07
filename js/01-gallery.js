import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.js-gallery'),
    openModalWindow: document.querySelector('.js-lightbox'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
    modalWindow: document.querySelector('.lightbox__content'),
    bigImg: document.querySelector('.lightbox__image'),
  }
  
  const listItemsMarkup = createListMarkup(galleryItems);
  
  refs.gallery.insertAdjacentHTML("beforeend", listItemsMarkup);
  
  function createListMarkup(items) {
    return items.map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
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
    </li>
    `
    }).join('');
  }

  refs.gallery.addEventListener('click', onPictureClick);

function onPictureClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return
  }
  refs.openModalWindow.classList.add('is-open');
  refs.bigImg.src = e.target.dataset.source;
}

refs.openModalWindow.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  refs.openModalWindow.classList.toggle('is-open');
}