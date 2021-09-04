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

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var menu = document.querySelector('menu');\n  var anchors = menu.querySelectorAll('a[href*=\"#\"]');\n  anchors.forEach(function (item) {\n    if (item.attributes.href.textContent !== '#close') {\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n        console.log(item);\n        var blockID = item.getAttribute('href').substr(1);\n        document.getElementById(blockID).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/smoothScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9758d5f72bf1a662c65a")
/******/ })();
/******/ 
/******/ }
);