import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = galleryItems


const divGallery = document.querySelector('div.gallery')

const markup = gallery.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source=""${original}
      alt="${description}"
    />
  </a>
</div>`
}).join(' ');

divGallery.insertAdjacentHTML('beforeend', markup)
divGallery.addEventListener('click', onImgGallery);



function onImgGallery(event){
    event.preventDefault();

if(event.target.nodename !== 'IMG'){
    return;
}
const selectedImg = event.target.dataset.source;
selectedShow(selectedImg)
}

function selectedShow(images){



    const instance = basicLightbox.create(images)

    document.querySelector('images.create').onclick = instance.show
    

}




// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()


