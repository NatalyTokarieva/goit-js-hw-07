import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const divGallery = document.querySelector('.gallery')
const divGalleryMarkup = createItemsMarkup(galleryItems)
divGallery.insertAdjacentHTML('beforeend',divGalleryMarkup)


function createItemsMarkup(item){
    return galleryItems
    .map(({preview, original, description}) =>{

    return`
    <ul class="gallery">
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
</ul>`
})
.join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });