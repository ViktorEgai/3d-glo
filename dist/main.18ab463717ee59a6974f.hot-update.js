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

/***/ "./src/modules/openPopup.js":
/*!**********************************!*\
  !*** ./src/modules/openPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openPopup = function openPopup() {\n  var popupBtn = document.querySelectorAll('.popup-btn'),\n      popup = document.querySelector('.popup'),\n      popupContent = document.querySelector('.popup-content');\n  var count = -300;\n  popupBtn.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      popup.style.display = 'block'; // анимация popup\n\n      function showPopup() {\n        count += 7;\n        popupContent.style.top = count + 'px';\n        if (count <= 100) setTimeout(showPopup, 1);\n      }\n\n      if (window.screen.width > 768) showPopup();\n    });\n  }); // закрытие попап\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      count = -300;\n      popupContent.querySelectorAll('input').value = '';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n        count = -300;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openPopup);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/openPopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9af2b69102c7cd3dc01c")
/******/ })();
/******/ 
/******/ }
);