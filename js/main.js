/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {
	// Таймер
	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
					dateNow = new Date().getTime(),
					timeRemaining = (dateStop - dateNow) / 1000;
			let seconds = Math.floor(timeRemaining % 60),
					minutes = Math.floor((timeRemaining / 60) % 60),
					hours = Math.floor(timeRemaining / 60 / 60);
					if (hours < 10) hours = '0' + hours;
					if (minutes < 10) minutes = '0' + minutes;
					if (seconds < 10) seconds = '0' + seconds;
			return { hours, minutes, seconds, timeRemaining };
		}
		function uploadTime() {	
			if (getTimeRemaining().timeRemaining > 0) {
				timerHours.textContent = getTimeRemaining().hours;
				timerMinutes.textContent = getTimeRemaining().minutes;
				timerSeconds.textContent = getTimeRemaining().seconds;
			} else {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		}
		setInterval(uploadTime, 1000);
	}
	countTimer('22 aug 2021');

	// открытие меню
	function toggleMenu() {
		const menuBtn = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItem = menu.querySelectorAll('li');

		function handlerMenu() {
			menu.classList.toggle('active-menu');
		}

		menuBtn.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		menuItem.forEach(item => item.addEventListener('click', handlerMenu));
	}
	toggleMenu();

	// открытие popup окна
	function openPopup() {
		const popupBtn = document.querySelectorAll('.popup-btn'),
			popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close'),
			popupContent = document.querySelector('.popup-content');
		let count = -300;

		popupBtn.forEach(btn => {
			btn.addEventListener('click', () => {
				popup.style.display = 'block';
				// анимация popup
				function showPopup() {
					console.log(count);
					count += 7;
					popupContent.style.top = count + 'px';
					if (count <= 100) setTimeout(showPopup, 1);
				}
				if (window.screen.width > 768) showPopup();
			});
		});
		popupClose.addEventListener('click', () => {
			popup.style.display = 'none';
			count = -300;
		});
	}
	openPopup();

	// плавная прокрутка страницы при клике на ссылки
	function smoothScroll() {
		const anchors = document.querySelectorAll('a[href*="#"]');
		anchors.forEach((item) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				const blockID = item.getAttribute('href').substr(1);
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			});
		});
	}
	smoothScroll();
})