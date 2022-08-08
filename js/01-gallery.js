import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

  
const divGallery = document.querySelector(".gallery");
divGallery.innerHTML = createGalleryMarkup(galleryItems);
divGallery.addEventListener("click", onImgModalOpen);

let instance;

function onImgModalOpen(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  instance = basicLightbox.create(
    `<img width="800" height="600"
    src="${e.target.dataset.source}">`,
    {
      onShow: (instance) => {
        addListener();
      },
      onClose: (instance) => {
        removeListener();
      },
    }
  );
  instance.show();
}

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function addListener() {
  window.addEventListener("keydown", onEscClick);
}

function removeListener() {
  window.removeEventListener("keydown", onEscClick);
}

function onEscClick(e) {
  if (e.code === "Escape") {
    modalInstance.close();
  }
}


// instance = basicLightbox.create(
//   `<img width="800" height="600"
//   src="${e.target.dataset.source}">`,
//   {
//     onShow: (instance) => {
//       addListener();
//     },
//     onClose: (instance) => {
//       removeListener();
//     },
//   }
// );
// instance.show();