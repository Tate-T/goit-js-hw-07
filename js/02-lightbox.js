import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

window.addEventListener('keydown', onEscBtnPress);
window.addEventListener('keydown', onRightLeftBtn);

function onEscBtnPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  refs.openModalWindow.classList.remove('is-open');
  refs.bigImg.setAttribute('src', "");
}

function onRightLeftBtn(e) {
  if (e.code === "ArrowRight") {
    const imgArrey = refs.gallery.querySelectorAll(".gallery__image");

    const srcArrey = [...imgArrey].map((src) => src.dataset.source);

    const currentImgHref = refs.bigImg.getAttribute("src");

    let nextImgHref = "";
    for (let i = 0; i < srcArrey.length; i += 1) {
      const currentNumberHref = srcArrey.indexOf(currentImgHref);

      const nextNumberHref = currentNumberHref +1;
      if (nextNumberHref >= srcArrey.length) {
        return;
      }
      nextImgHref = srcArrey[nextNumberHref];
    }
    refs.bigImg.setAttribute("src", nextImgHref);
  }

  if (e.code === "ArrowLeft") {
    const imgArrey = refs.gallery.querySelectorAll(".gallery__image");

    const srcArrey = [...imgArrey].map((src) => src.dataset.source);

    const currentImgHref = refs.bigImg.getAttribute("src");

    let nextImgHref = "";
    for (let i = 0; i < srcArrey.length; i += 1) {
      const currentNumberHref = srcArrey.indexOf(currentImgHref);

      const nextNumberHref = currentNumberHref -1;
      if (nextNumberHref < 0) {
        return;
      }
      nextImgHref = srcArrey[nextNumberHref];
    }
    refs.bigImg.setAttribute("src", nextImgHref);
  }
}