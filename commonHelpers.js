(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c=s=>s.map(e=>`<div class="js-section-images">
      
        <img
          src="${e.webformatURL}"
          alt="${e.tags}"
          class="js-gallery-img"
        />
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
      
    </div>`).join(""),i="https://pixabay.com/api/",u="43826847-f350fa9fd32410ec3fefedfc5",f=(s="flowers")=>{const e=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${i}?${e}`).then(o=>{if(!o.ok)throw new Error("Error!");return o.json()})},l=document.querySelector(".gallery"),m=document.querySelector(".form-field");m.addEventListener("submit",d);function d(s){s.preventDefault();const e=s.target.elements.searchKeyword.value.trim();console.log(e),e===""&&(l.innerHTML="",s.target.reset())}f().then(s=>{const e=c(s.hits);l.innerHTML=e}).catch(s=>console.log(s));
//# sourceMappingURL=commonHelpers.js.map
