"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3D_Glo"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  }\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n    if (target.closest('.menu')) handlerMenu();\n    if (target.closest('.close-btn')) handlerMenu();\n\n    if (target.closest('a[href*=\"#\"]')) {\n      if (target.attributes.href.textContent !== '#close') {\n        handlerMenu();\n      }\n\n      if (target.attributes.href.textContent === '#service-block') {\n        console.log(target);\n      }\n    }\n\n    if (!target.closest('.active-menu') && !target.closest('.menu')) menu.classList.remove('active-menu');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4de8364a3728c454f6a9")
/******/ })();
/******/ 
/******/ }
);