(()=>{var e={927:()=>{const e=document.querySelector(".header__nav-button"),t=document.querySelector(".header__nav"),o=document.querySelector(".header__nav-button-opened"),n=document.querySelectorAll(".tabs__item"),s=document.querySelectorAll(".tabs-info__item"),d=document.querySelectorAll(".countries__list li"),i=document.querySelectorAll(".header__nav-link"),c=document.querySelector(".promo__button"),a=document.querySelectorAll(".tabs-info__item-button"),l=document.querySelector(".modal"),r=document.querySelector(".overlay"),u=document.querySelector(".modal__form"),m=document.querySelector(".modal__form-close"),v=document.querySelector(".modal__form-title"),_=document.querySelectorAll(".modal__form-input"),L=document.querySelector(".modal__form-button"),y=document.querySelector(".modal-success"),f=document.querySelector(".modal-success__close"),b=document.querySelector(".price__complex-button"),h=document.querySelector(".price__econom-button"),p=document.querySelector(".questions__form-button"),E=document.querySelector(".questions__form"),k=document.querySelector(".questions__form-input"),q=document.querySelector(".questions__form-title");function S(e){for(let e=0;e<n.length;e++)s[e].classList.contains("hidden")||(n[e].classList.contains("tabs__item--active")&&n[e].classList.remove("tabs__item--active"),s[e].classList.add("hidden"));n[e].classList.add("tabs__item--active"),s[e].classList.remove("hidden")}function w(e){j(),_[0].style.borderColor="rgba(44, 46, 63, 0.3)",v.classList.contains("modal__form-title--invalid")&&v.classList.remove("modal__form-title--invalid"),document.body.classList.remove("page-body--noscroll"),l.classList.add("hidden"),r.classList.add("hidden"),m.removeEventListener("click",w),window.removeEventListener("click",C),window.removeEventListener("keydown",C)}function g(e){document.body.classList.add("page-body--noscroll"),l.classList.remove("hidden"),r.classList.remove("hidden"),_[0].focus(),m.addEventListener("click",w),window.addEventListener("click",C),window.addEventListener("keydown",C)}function C(e){e.target.classList.contains("overlay")&&(j(),_[0].style.borderColor="rgba(44, 46, 63, 0.3)",v.classList.contains("modal__form-title--invalid")&&v.classList.remove("modal__form-title--invalid"),document.body.classList.remove("page-body--noscroll"),l.classList.add("hidden"),r.classList.add("hidden")),"keydown"===e.type&&"Escape"==e.key&&(j(),_[0].style.borderColor="rgba(44, 46, 63, 0.3)",v.classList.contains("modal__form-title--invalid")&&v.classList.remove("modal__form-title--invalid"),document.body.classList.remove("page-body--noscroll"),l.classList.add("hidden"),r.classList.add("hidden"))}function A(e){"keydown"===e.type&&"Escape"==e.key&&(document.body.classList.remove("page-body--noscroll"),j(),y.classList.add("hidden"),r.classList.add("hidden")),e.target.classList.contains("overlay")&&(document.body.classList.remove("page-body--noscroll"),j(),y.classList.add("hidden"),r.classList.add("hidden"))}function x(){document.body.classList.remove("page-body--noscroll"),j(),y.classList.add("hidden"),r.classList.add("hidden")}function j(){_[0].value="",_[1].value=""}t.classList.contains("header__nav--nojs")&&t.classList.remove("header__nav--nojs"),e.addEventListener("click",(function(){t.classList.contains("header__nav--opened")||t.classList.add("header__nav--opened")})),o.addEventListener("click",(function(){t.classList.contains("header__nav--opened")&&t.classList.remove("header__nav--opened")})),c.addEventListener("click",(function(){location.href="#tabs"})),a.forEach((e=>{e.addEventListener("click",(function(){g()}))})),b.addEventListener("click",(function(){g()})),h.addEventListener("click",(function(){g()})),i.forEach((e=>{e.addEventListener("click",(function(){t.classList.contains("header__nav--opened")&&t.classList.remove("header__nav--opened")}))})),d.forEach(((e,t)=>{e.addEventListener("click",(function(){S(t)}))})),n.forEach(((e,t)=>{e.addEventListener("click",(function(){S(t)}))})),p.addEventListener("click",(function(e){e.preventDefault(),!1===E.checkValidity()?(k.style.borderColor="#FE7865",q.classList.add("questions__form-title--invalid")):(k.style.borderColor="rgba(44, 46, 63, 0.3)",q.classList.remove("questions__form-title--invalid"),y.classList.remove("hidden"),r.classList.remove("hidden"),document.body.classList.add("page-body--noscroll"),f.addEventListener("click",x),window.addEventListener("click",A),window.addEventListener("keydown",A))})),L.addEventListener("click",(function(e){e.preventDefault(),!1===u.checkValidity()?(_[0].style.borderColor="#FE7865",v.classList.add("modal__form-title--invalid")):(v.classList.remove("modal__form-title--invalid"),_[0].style.borderColor="rgba(44, 46, 63, 0.3)",localStorage.phone?localStorage.phone=_[0].value:localStorage.setItem("phone",_[0].value),localStorage.email?localStorage.email=_[1].value:localStorage.setItem("email",_[1].value),m.removeEventListener("click",w),window.removeEventListener("click",C),window.removeEventListener("keydown",C),l.classList.add("hidden"),y.classList.remove("hidden"),f.addEventListener("click",x),window.addEventListener("click",A),window.addEventListener("keydown",A))}))}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,o),d.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(927)})()})();