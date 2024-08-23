
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//DODANO
let lightbox;

export function createImages(imgDetails) {
 
  return `
    <li class="gallery-item">
      <a href="${imgDetails.largeImageURL}">
        <img src="${imgDetails.webformatURL}" alt="${imgDetails.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${imgDetails.likes}</p>
        <p><b>Views:</b> ${imgDetails.views}</p>
        <p><b>Comments:</b> ${imgDetails.comments}</p>
        <p><b>Downloads:</b> ${imgDetails.downloads}</p>
      </div>
    </li>
  `;
}

//DODANO
export function initializeLightbox() {
    lightbox = new SimpleLightbox('.gallery__link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
  
  export function refreshLightbox() {
    lightbox.refresh();
  }


  
export function showLoader() {
    const loader = document.querySelector('.js-loader');
    loader.style.display = 'block';
  }
  
  export function hideLoader() {
    const loader = document.querySelector('.js-loader');
    loader.style.display = 'none';
  }
  



export function clearImages() {
  const list = document.querySelector('.gallery');
  
  if (list) {  
    list.innerHTML = '';
  } else {
    console.error('Element with class "gallery" not found.');
  }
}

