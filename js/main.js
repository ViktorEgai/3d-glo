/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {
	// Таймер
	const countTimer = (deadline) => {
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
	countTimer('30 aug 2021');

	// открытие меню
	const toggleMenu = () => {
		const	menu = document.querySelector('menu');

		function handlerMenu() {
			menu.classList.toggle('active-menu');
		}

		document.addEventListener('click', event => {
			let target = event.target;
			if (target.closest('.menu')) handlerMenu();
			if (target.closest('.close-btn')) handlerMenu();
			if (target.closest('a[href*="#"]')) {
				if (target.attributes.href.textContent !== '#close') {
					handlerMenu();
				}
			}
			if (!target.closest('.active-menu') && !target.closest('.menu')) menu.classList.remove('active-menu');
		});
	};
	toggleMenu();

	// открытие popup окна
	const openPopup = ()=> {
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
					count += 7;
					popupContent.style.top = count + 'px';
					if (count <= 100) setTimeout(showPopup, 1);
				}
				if (window.screen.width > 768) showPopup();
			});
		});
		// закрытие попап
		popup.addEventListener('click', (event) => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
				count = -300;
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
					count = -300;
				}
			}
		});
	};
	openPopup();

// плавная прокрутка страницы при клике на ссылки
	const smoothScroll = () => {
		const menu = document.querySelector('menu');
		const anchors = menu.querySelectorAll('a[href*="#"]');
		anchors.forEach((item) => {
			if (item.attributes.href.textContent !== '#close')  {
				item.addEventListener('click', (event) => {
				event.preventDefault();
				const blockID = item.getAttribute('href').substr(1);
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				});
			}			
		});
	};
	smoothScroll();

	// табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');
		// навешивание классов после клика по табам
		const toggleTabContent = (index) => {
			for(let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};
		// клики по табам
		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
				target = target.closest('.service-header-tab');
				if(target) {
					tab.forEach((item, i) => {
						if (item === target) toggleTabContent(i);
					});
				}
		});
	};
	tabs();
})