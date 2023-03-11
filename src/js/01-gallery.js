// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(element => {
      return `
          <a class="gallery__item" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
          </a>
      `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
