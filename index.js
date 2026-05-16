import{a as y,S as p,i as a}from"./assets/vendor-DirGshhi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function g(o){const i="https://pixabay.com"+"/api/",e={key:"55157705-9f4ed22218599416e91cc1d5e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await y.get(i,{params:e})).data}const u=document.querySelector(".gallery"),h=new p(".gallery a");function b(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
        <li class="gallery-item">
            <a href="${i}">
                <img src="${s}" alt="${e}" loading="lazy" />
            </a>
            <ul class="gallery-info">
                <li><b>Likes</b> ${t}</li>
                <li><b>Views</b> ${n}</li>
                <li><b>Comments</b> ${f}</li>
                <li><b>Downloads</b> ${m}</li>
            </ul>
        </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){u.innerHTML=""}const d=document.querySelector(".loader");function w(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}const S=document.querySelector('input[name="search-text"]'),P=document.querySelector(".form");let c;P.addEventListener("submit",async o=>{if(o.preventDefault(),L(),w(),c=S.value,c===""){a.show({title:"Empty form",message:'Please add some text and click "Search"',color:"blue"}),l();return}try{const r=await g(c);if(r.total===0){a.show({title:"Try again",message:"Sorry, there are no images matching your search query. Please try again!",color:"blue"}),l();return}b(r.hits)}catch{a.show({title:"Error",message:"Something went wrong in createGallery",color:"red"})}finally{l()}});
//# sourceMappingURL=index.js.map
