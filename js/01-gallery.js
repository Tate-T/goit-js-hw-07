import { galleryItems } from './gallery-items.js';



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

gallery.addEventListener('click', onPictureClick);

function onPictureClick(e) {
  e.preventDefault();
  document.removeEventListener("keydown", onEscBtn);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscBtn);
      }
    });

  instance.show();

  document.addEventListener("keydown", onEscBtn);

  function onEscBtn(e) {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscBtn);
    }
  };
}