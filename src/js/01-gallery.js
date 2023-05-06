// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
createGallery(galleryItems);
function createGallery(galleryData) {
    gallery.innerHTML = galleryData
      .map(({preview, original, description}) => 
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`).join("");
  }
let boxImage = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
   captionDelay: 250,
});

