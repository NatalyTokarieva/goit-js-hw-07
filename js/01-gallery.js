import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const divGallery = document.querySelector('.gallery')
const divGalleryMarkup = createItemsMarkup(galleryItems)
divGallery.insertAdjacentHTML('beforeend',divGalleryMarkup)
divGallery.addEventListener('click', onImgGallery);

function createItemsMarkup(galleryItems){
  return galleryItems.map(({preview, original, description}) =>{
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source=""${original}
          alt="${description}"
        />
      </a>
    </div>`
  })
  .join("");

}

function onImgGallery(event){
  const isGalleryItemEl = event.target.classList.contains('gallery__image');
  const originalImg = event.target.dataset.source;
  event.preventDefault();
  if(!isGalleryItemEl){
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${originalImg}" width="800" height="600">`, {
    onShow: () => {
      window.addEventListener('keydown', onCloseGallery);
  },
  onClose: () => {
    window.removeEventListener('keydown', onCloseGallery);
  },

});

function onCloseGallery(event){
  if(event.code === 'Escape'){
    instance.close();
  }
}

instance.show();
}








// // import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// // instance.show()