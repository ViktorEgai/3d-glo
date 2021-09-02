/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_openPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/openPopup */ \"./src/modules/openPopup.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/changePhoto */ \"./src/modules/changePhoto.js\");\n/* harmony import */ var _modules_disableInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/disableInputs */ \"./src/modules/disableInputs.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validate */ \"./src/modules/validate.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n // Таймер\t\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 aug 2021'); // открытие меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // открытие popup окна\n\n(0,_modules_openPopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // плавная прокрутка страницы при клике на ссылки\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // табы\t\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // блок с фотками \"наша команда\" изменение фото при наведении\n\n(0,_modules_changePhoto__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // запрет ввода инпутов\t\n\n(0,_modules_disableInputs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100); //  валидатор на количество символов в input'ах\n\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(); // send-ajx-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://3D_Glo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1,\n        counter = 0;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * +squareValue * countValue * dayValue;\n    } // анимация результата\n\n\n    var animate;\n\n    var calcAnimation = function calcAnimation() {\n      if (counter < total) {\n        counter += Math.ceil(total / 10);\n        animate = requestAnimationFrame(calcAnimation);\n        totalValue.textContent = counter;\n\n        if (counter > total) {\n          totalValue.textContent = Math.floor(counter - (counter - total));\n        }\n      }\n    }; //остановка анимации\n\n\n    if (typeValue.length === 0 || squareValue.length === 0 || squareValue === '0') {\n      totalValue.textContent = 0;\n      cancelAnimationFrame(animate);\n    } else {\n      animate = requestAnimationFrame(calcAnimation);\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/changePhoto.js":
/*!************************************!*\
  !*** ./src/modules/changePhoto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changePhoto = function changePhoto() {\n  var photos = document.querySelectorAll('.command__photo');\n  photos.forEach(function (item, index) {\n    item.addEventListener('mouseenter', function () {\n      item.setAttribute('src', item.dataset.img);\n    });\n    item.addEventListener('mouseleave', function () {\n      item.setAttribute('src', \"images/command/command-\".concat(index + 1, \".jpg\"));\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePhoto);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/changePhoto.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000;\n    var seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    if (hours < 10) hours = '0' + hours;\n    if (minutes < 10) minutes = '0' + minutes;\n    if (seconds < 10) seconds = '0' + seconds;\n    return {\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds,\n      timeRemaining: timeRemaining\n    };\n  }\n\n  function uploadTime() {\n    if (getTimeRemaining().timeRemaining > 0) {\n      timerHours.textContent = getTimeRemaining().hours;\n      timerMinutes.textContent = getTimeRemaining().minutes;\n      timerSeconds.textContent = getTimeRemaining().seconds;\n    } else {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  setInterval(uploadTime, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/disableInputs.js":
/*!**************************************!*\
  !*** ./src/modules/disableInputs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar disableInputs = function disableInputs() {\n  // запрет ввода букв в калькуляторе\n  var calcItems = document.querySelectorAll('input.calc-item');\n  calcItems.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/\\D/g, '');\n    });\n  }); // запрет на ввод символов\n\n  var forms = document.querySelectorAll('form');\n  forms.forEach(function (item, i) {\n    item.addEventListener('input', function (e) {\n      var target = e.target;\n\n      if (target.id === \"form\".concat(i + 1, \"-name\")) {\n        target.value = target.value.replace(/[\\d\\w^^\\^~`!@#\\$%^*_+\\[\\]{}\\\\:;?|>'\\/<=&()№\"]+$/gi, '');\n      }\n\n      if (target.id === \"form\".concat(i + 1, \"-message\")) {\n        target.value = target.value.replace(/[a-z\\^~`@#\\$%^*_+\\[\\]{}\\\\|>'\\/<=&()]+$/gi, '');\n      }\n\n      if (target.id === \"form\".concat(i + 1, \"-email\")) {\n        target.value = target.value.replace(/[\\а-яА-Я0-9^^\\^`#\\$%^+\\[\\]{}\\\\:;?|>\\/<=&()№\"]/g, '');\n      }\n\n      if (target.id === \"form\".concat(i + 1, \"-phone\")) {\n        target.value = target.value.replace(/[а-яa-z^^\\^~`!@#\\$%^*_\\[\\]{}\\\\:;?|>'\\/<=&№\"]+$/gi, '');\n      }\n    });\n  }); // событие blur для всех инпутов\n\n  var inputs = document.querySelectorAll('input');\n  inputs.forEach(function (item) {\n    item.addEventListener('blur', function () {\n      if (item.getAttribute('name') === 'user_name') {\n        if (item.value) {\n          item.value = item.value.replace(/^\\s+|\\s+$/g, '');\n          var words = item.value.split(' ');\n          var newWord = '';\n\n          if (words.length > 1) {\n            words.forEach(function (word, i) {\n              if (i < words.length) {\n                word = word[0].toUpperCase() + word.slice(1) + ' ';\n              } else {\n                word = word[0].toUpperCase() + word.slice(1);\n              }\n\n              newWord += word;\n            });\n            item.value = newWord;\n          } else {\n            item.value = item.value[0].toUpperCase() + item.value.slice(1);\n          }\n        } else {\n          return;\n        }\n      }\n\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.replace(/^\\s+|\\s+$/g, '');\n\n      if (item.value.match(/^-+|-+$/)) {\n        item.value = item.value.replace(/^-+|-+$/g, '');\n\n        if (item.value.match(/^\\s+|\\s+$/)) {\n          item.value = item.value.replace(/^\\s+|\\s+$/g, '');\n        }\n      } else {\n        item.value = item.value.replace(/-+/g, '-');\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disableInputs);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/disableInputs.js?");

/***/ }),

/***/ "./src/modules/openPopup.js":
/*!**********************************!*\
  !*** ./src/modules/openPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openPopup = function openPopup() {\n  var popupBtn = document.querySelectorAll('.popup-btn'),\n      popup = document.querySelector('.popup'),\n      popupContent = document.querySelector('.popup-content');\n  var count = -300;\n  popupBtn.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      popup.style.display = 'block'; // анимация popup\n\n      function showPopup() {\n        count += 7;\n        popupContent.style.top = count + 'px';\n        if (count <= 100) setTimeout(showPopup, 1);\n      }\n\n      if (window.screen.width > 768) showPopup();\n    });\n  }); // закрытие попап\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      count = -300;\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n        count = -300;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openPopup);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/openPopup.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;'; // обработчик для всех форм\n\n  forms.forEach(function (form) {\n    // событие сабмит\n    form.addEventListener('submit', function (event) {\n      statusMessage.innerHTML = \"\\n\\t<div class='sk-double-bounce'>\\n\\t\\t<div class='sk-child sk-double-bounce-1'></div>\\n\\t\\t<div class='sk-child sk-double-bounce-2'></div>\\n\\t</div>\\n\\t\\t\\t\\t\";\n      animStyle();\n      form.querySelector('.btn').disabled = true;\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      }); // вызов функции postData\n\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        if (form.id === 'form3') {\n          setTimeout(function () {\n            document.querySelector('.popup').style.display = 'none';\n          }, 3000);\n        }\n\n        statusMessage.textContent = successMessage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n\n        if (form.id === 'form3') {\n          setTimeout(function () {\n            document.querySelector('.popup').style.display = 'none';\n          }, 3000);\n        }\n\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n        console.error(error);\n      }); // очистка инпутов после отправки\n\n      _toConsumableArray(form).forEach(function (input) {\n        input.value = '';\n      });\n    }); // цвет текста сообщения в popup окне\n\n    if (form.id === 'form3') {\n      statusMessage.style.color = '#fff';\n    }\n  }); // стили для анимации \n\n  var animStyle = function animStyle() {\n    var style = document.createElement('style');\n    style.textContent = \"\\n.sk-double-bounce {\\n  width: 50px;\\n  height: 50px;\\n  position: fixed;\\n  margin: auto;  \\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%,-50%)\\n  \\n}\\n.sk-child {\\n    width: 100%;\\n    height: 100%;\\n    border-radius: 50%;\\n    background-color: #19b5fe;\\n    opacity: 0.6;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    animation: sk-double-bounce 2s infinite ease-in-out;\\n  }\\n\\n  .sk-double-bounce-2 {\\n    animation-delay: -1s;\\n  }\\n@keyframes sk-double-bounce {\\n  0%,\\n  100% {\\n    transform: scale(0);\\n  }\\n  50% {\\n    transform: scale(1);\\n  }\\n}\\n\\t\\t\";\n    document.head.appendChild(style);\n  }; // отправка данных на сервер\n\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      ulDots = document.querySelector('.portfolio-dots'),\n      slider = document.querySelector('.portfolio-content');\n  var currentSlide = 0,\n      interval; // Добавление точек на страницу\n\n  var dots = function dots() {\n    for (var i = 0; i < slide.length; i++) {\n      var li = document.createElement('li');\n      li.classList.add('dot');\n      if (i === 0) li.classList.add('dot-active');\n      ulDots.appendChild(li);\n    }\n  };\n\n  dots();\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n    if (currentSlide >= slide.length) currentSlide = 0;\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    if (!target.matches('.portfolio-btn, .dot')) return;\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) currentSlide = 0;\n    if (currentSlide < 0) currentSlide = slide.length - 1;\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  }); // наведение мыши на кнопки\n\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide(1000);\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var menu = document.querySelector('menu');\n  var anchors = menu.querySelectorAll('a[href*=\"#\"]');\n  anchors.forEach(function (item) {\n    if (item.attributes.href.textContent !== '#close') {\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n        var blockID = item.getAttribute('href').substr(1);\n        document.getElementById(blockID).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab'); // навешивание классов после клика по табам\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  }; // клики по табам\n\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) toggleTabContent(i);\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  }\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n    if (target.closest('.menu')) handlerMenu();\n    if (target.closest('.close-btn')) handlerMenu();\n\n    if (target.closest('a[href*=\"#\"]')) {\n      if (target.attributes.href.textContent !== '#close') {\n        handlerMenu();\n      }\n    }\n\n    if (!target.closest('.active-menu') && !target.closest('.menu')) menu.classList.remove('active-menu');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar validate = function validate() {\n  var forms = document.querySelectorAll('form');\n  forms.forEach(function (form) {\n    // блокировка кнопки\n    form.querySelector('.btn').disabled = true; // событие change для input \t\t\n\n    _toConsumableArray(form.elements).forEach(function (elem) {\n      // создание дива для ошибок\n      var errorMsg = document.createElement('div');\n      errorMsg.classList.add('error');\n      elem.insertAdjacentElement('afterend', errorMsg); // обработчик change\n\n      elem.addEventListener('change', function () {\n        var btn = form.querySelector('.btn'); // валидация поля \"Имя\"\n\n        if (elem.getAttribute('name') === 'user_name') {\n          if (elem.value) {\n            if (elem.value.length < 3 || elem.value.length > 10) {\n              elem.classList.add('error-input');\n              errorMsg.textContent = 'Введите от 3 до 10 букв';\n              btn.disabled = true;\n            } else {\n              elem.classList.remove('error-input');\n              errorMsg.textContent = '';\n              btn.disabled = false;\n            }\n          } else {\n            elem.classList.remove('error-input');\n            errorMsg.textContent = '';\n            btn.disabled = true;\n          }\n        } // валидация номера телефона\n\n\n        if (elem.getAttribute('name') === 'user_phone') {\n          if (elem.value) {\n            if (elem.value.slice(0, 2) !== '+7' || elem.value.length < 12 || elem.value.length > 12) {\n              elem.classList.add('error-input');\n              errorMsg.textContent = 'Номер должен быть в формате +7XXXXXXX';\n              btn.disabled = true;\n            } else {\n              elem.classList.remove('error-input');\n              errorMsg.textContent = '';\n              btn.disabled = false;\n            }\n          } else {\n            elem.classList.remove('error-input');\n            errorMsg.textContent = '';\n            btn.disabled = true;\n          }\n        } // валидация сообщения\n\n\n        if (elem.getAttribute('name') === 'user_message') {\n          if (elem.value) {\n            if (elem.value.length < 15) {\n              elem.classList.add('error-input');\n              errorMsg.textContent = 'Сообщение должно содержать не менее 15 символов';\n              btn.disabled = true;\n            } else {\n              elem.classList.remove('error-input');\n              errorMsg.textContent = '';\n              btn.disabled = false;\n            }\n          } else {\n            elem.classList.remove('error-input');\n            errorMsg.textContent = '';\n            btn.disabled = true;\n          }\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://3D_Glo/./src/modules/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;