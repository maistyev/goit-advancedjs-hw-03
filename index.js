import{i as n,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api",d="49481602-fd69c907e71567b02dc237fda";function m(a){return fetch(`${u}/?key=${d}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(a){const s=a.split(",").map(e=>e.trim());return[...new Set(s)]}const f=({webformatURL:a,largeImageURL:t,likes:s,views:i,comments:e,downloads:r,tags:l})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${a}" title="${p(l).join(", ")}"/>
  </a>
  <div class="stats">
    <div class="stat">
      <p class="stat-title">Likes</p>
      <p class="stat-value">${s}</p>
    </div>
    <div class="stat">
      <p class="stat-title">Views</p>
      <p class="stat-value">${i}</p>
    </div>
    <div class="stat">
      <p class="stat-title">Comments</p>
      <p class="stat-value">${e}</p>
    </div>
    <div class="stat">
      <p class="stat-title">Downloads</p>
      <p class="stat-value">${r}</p>
    </div>
  </div>
</li>
`,o={form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),submitButton:document.querySelector(".js-search-button"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};function g(a){a.preventDefault(),o.gallery.innerHTML="";const t=o.input.value;if(t.trim()===""){n.error({title:"Error",message:"Please enter the search query!"});return}o.loader.classList.add("active"),m(t).then(s=>{if(s.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}o.gallery.innerHTML=s.hits.map(e=>f(e)).join(""),new c(".gallery-link",{captionDelay:250}).refresh()}).catch(s=>{n.error({title:"Error",message:"Something went wrong. Please try again!"})}).finally(()=>{o.loader.classList.remove("active")}),o.form.reset()}o.form.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
