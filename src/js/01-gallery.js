// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');
listEl.style.listStyle = 'none';

const addLiEls = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item" style="listStyleType: none">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
   </a>
</li>`
  )
  .join('');

listEl.insertAdjacentHTML('beforeend', addLiEls);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
