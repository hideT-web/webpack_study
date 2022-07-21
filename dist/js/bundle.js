/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/world.js
function world() {
  const sTxt="hello world！";
  const iOne=2;
  let p = document.querySelector('#target');
  p.textContent = sTxt+iOne;
}
;// CONCATENATED MODULE: ./src/index.js


window.addEventListener('load',(event)=>{
  world();
});
/******/ })()
;