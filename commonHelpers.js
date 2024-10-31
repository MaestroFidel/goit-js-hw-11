import{i,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d=r=>`
  <li class="gallery-card">
  <a href="${r.largeImageURL}">
  <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
  </a>
  <ul class="comments">
  <li class="com">likes: ${r.likes}</li>
  <li class="com">views: ${r.views}</li>
  <li class="com">comments: ${r.comments}</li>
  <li class="com">downloads: ${r.downloads}</li>
  </ul>
  </li>
  `,f=(r,o,t)=>{const a=r.map(d).join("");o.innerHTML=a,t.refresh()},h="https://pixabay.com/api/",y=r=>{const o=new URLSearchParams({q:r,orientation:"horizontal",per_page:20,key:"45481518-557ec69fe97012c17356df52c",image_type:"photo",safesearch:"true"});return fetch(`${h}?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),p=r=>{r.preventDefault();const o=c.elements.user_query.value.trim();if(o===""){i.error({title:"Error",message:"Please fill out the form",position:"topRight",timeout:3e3});return}u.classList.remove("loader-hidden"),y(o).then(t=>{if(t.hits.length===0){i.warning({title:"No results",message:"Sorry, there are no images your search query. Please try again.",position:"topLeft"}),n.innerHTML="",c.reset();return}f(t.hits,n,new m(".gallery-card a"))}).catch(t=>{i.error({title:"Error",message:"Something wrong. Please, try later"})}).finally(()=>{u.classList.add("loader-hidden")})};c.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
