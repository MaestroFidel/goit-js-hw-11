
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotos } from './js/pixabay-api';

//DODANO
import {
    createImages,
    clearImages,
    showLoader,
    hideLoader,
    initializeLightbox,
    refreshLightbox,
  } from './js/render-functions';
  



const formEl = document.querySelector('.js-search-form');

const loader = document.querySelector('.js-gallery');

const searchFormSubmit = event => {
  event.preventDefault();

  const searchValue = formEl.elements.searchtext.value.trim();

  if (!searchValue) {
    iziToast.error({
      message: "Please enter a valid search query.",
      position: 'topRight',
    });
    return;
  }

  //DODANO
  clearImages();
  showLoader();
  
  fetchPhotos(searchValue)
  .then(data => {

    //DODANO
    hideLoader();


    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, no images were found.",
        position: 'topRight',
      });
      loader.innerHTML = '';
      formEl.reset();
      return;
    }
    // const galleryCard = data.result.map(imgDetails => createGalleryCard(imgDetails)).join('');
    const galleryCard = data.hits.map(imgDetails => createImages(imgDetails)).join(''); 

    loader.innerHTML = galleryCard;

    //DODANO
    initializeLightbox(); // Ініціалізація SimpleLightbox після першого завантаження
    refreshLightbox();
    //QQQ
  })
  .catch(err => {
    console.log(err);
  });
}

formEl.addEventListener('submit', searchFormSubmit);

