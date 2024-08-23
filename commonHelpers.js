import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const d=e=>{const n="https://pixabay.com/api/",o=new URLSearchParams({key:"45481518-557ec69fe97012c17356df52c",q:e,image_type:"photo",orientation:"horizontal",per_page:20,safesearch:!0});return fetch(`${n}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})};let u;function h(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `}function m(){u=new f(".gallery__link",{captionsData:"alt",captionDelay:250})}function p(){u.refresh()}function y(){const e=document.querySelector(".js-loader");e.style.display="block"}function g(){const e=document.querySelector(".js-loader");e.style.display="none"}function b(){const e=document.querySelector(".gallery");e?e.innerHTML="":console.error('Element with class "gallery" not found.')}const c=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),L=e=>{e.preventDefault();const n=c.elements.searchtext.value.trim();if(!n){a.error({message:"Please enter a valid search query.",position:"topRight"});return}b(),y(),d(n).then(o=>{if(g(),!o.hits||o.hits.length===0){a.error({message:"Sorry, no images were found.",position:"topRight"}),l.innerHTML="",c.reset();return}const s=o.hits.map(t=>h(t)).join("");l.innerHTML=s,m(),p()}).catch(o=>{console.log(o)})};c.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
