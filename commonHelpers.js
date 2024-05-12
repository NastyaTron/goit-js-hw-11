import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const f=r=>r.map(e=>`<div class="js-section-images">
        <a href="${e.largeImageURL}">
        <img
          src="${e.webformatURL}"
          alt="${e.tags}"
          class="js-gallery-img"
        /></a>
        <div class="js-group-text">
          <small class="js-text"
            >Likes <span class="js-span-text">${e.likes}</span></small
          >
          <small class="js-text"
            >Views <span class="js-span-text">${e.views}</span></small
          >
          <small class="js-text"
            >Comments <span class="js-span-text">${e.comments}</span></small
          >
          <small class="js-text"
            >Downloads
            <span class="js-span-text">${e.downloads}</span></small
          >
        </div>
    </div>`).join(""),m="https://pixabay.com/api/",d="43826847-f350fa9fd32410ec3fefedfc5",p=(r="flowers")=>{const e=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${e}`).then(o=>{if(!o.ok)throw new Error("Error!");return o.json()})},n=document.querySelector(".js-gallery"),h=document.querySelector(".form-field"),i=document.querySelector(".loader");h.addEventListener("submit",y);function y(r){r.preventDefault();const e=r.target.elements.searchKeyword.value.trim();if(e===""){n.innerHTML="",r.target.reset(),c.error({timeout:2e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#d37a7a",close:!1,closeOnClick:!0});return}n.innerHTML="",i.classList.remove("is-hidden"),p(e).then(o=>{o.hits.length===0&&c.error({timeout:2e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#d37a7a",close:!1,closeOnClick:!0});const a=f(o.hits);n.innerHTML=a,new u(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(o=>console.log(o)).finally(()=>{r.target.reset(),i.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
