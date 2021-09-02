import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import openPopup from './modules/openPopup';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import disableInputs from './modules/disableInputs';
import calc from './modules/calc';
import validate from './modules/validate';
import sendForm from './modules/sendForm';

// Таймер
countTimer('30 aug 2021');
// открытие меню
toggleMenu();
// открытие popup окна
openPopup();
// плавная прокрутка страницы при клике на ссылки
smoothScroll();
// табы
tabs();
// слайдер
slider();
// блок с фотками "наша команда" изменение фото при наведении
changePhoto();
// запрет ввода инпутов
disableInputs();
// калькулятор
calc(100);
//  валидатор на количество символов в input'ах
validate();
// send-ajx-form
sendForm();